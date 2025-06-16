import HomePage from "../support/pages/HomePage";
import login from "../utility/login";

const homePage = new HomePage();

// ensure user is logged in first
beforeEach(() => {
  login(Cypress.env("valid_user"), Cypress.env("valid_pass"));

  // intercept the network request and verify the authentication status in the response
  cy.intercept({
    method: "GET",
    url: "**/session",
  }).as("loggedIn");
  cy.wait("@loggedIn").then((interception) => {
    // verify 'authenticated' status is true
    expect(interception.response.body.authenticated).to.eq(true);
  });
  // verify the UI is loaded
  homePage.getHomePageText().isVisible();
});
describe("Verify the presence and functionality of the landing page", () => {
  it("Should verify the layout of the landing page", () => {
    // verify the three metrics cards are visible
    homePage.getVisitMetricsSection().getActiveVisitsCard().isVisible();
    homePage.getVisitMetricsSection().getTotalVisitsCard().isVisible();
    homePage.getVisitMetricsSection().getScheduledVisitsCard().isVisible();
    // verify the widgets with detailed metrics are visible
    homePage.getActiveVisitsWidget().isVisible();
    homePage.getTodaysAppointmentsWidget().isVisible();
  });

  it("Should verify that active visits can be expanded to view more details", () => {
    // expand all rows
    homePage.getActiveVisitsWidget().expandAllRowsBtn().click();
    // verify the correct columns are shown when a row is expanded
    homePage.getActiveVisitsWidget().getColumnName("Time").isVisible();
    homePage
      .getActiveVisitsWidget()
      .getColumnName("Encounter Type")
      .isVisible();
    homePage.getActiveVisitsWidget().getColumnName("Provider").isVisible();
  });

  it("Should verify that Today's appointments can be expanded to view more details", () => {
    // expand all rows
    homePage.getTodaysAppointmentsWidget().expandAllRowsBtn().click();
    // verify the correct columns are shown when a row is expanded
    homePage
      .getTodaysAppointmentsWidget()
      .getColumnName("Patient Details")
      .isVisible();
    homePage
      .getTodaysAppointmentsWidget()
      .getColumnName("Appointment Notes")
      .isVisible();
    homePage
      .getTodaysAppointmentsWidget()
      .getColumnName("Appointment History")
      .isVisible();
  });
});
