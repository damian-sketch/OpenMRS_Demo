import HomePage from "../support/pages/HomePage";
import LoginPage from "../support/pages/LoginPage";
import login from "../utility/login";

const loginPage = new LoginPage();
const homePage = new HomePage();

// ensure user is logged in first
before(() => {
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

describe("Verify logout functionality", () => {
  it("Should verify that a logged in user can successfully log out", () => {
    // show and select the logout option by clicking on the User profile button
    homePage.getNavigationBar().getUserProfileButton().click();
    homePage
      .getNavigationBar()
      .getUserMenuDropdown()
      .getButtonByName("Logout")
      .click();
    //verify user is logged out and can see the log in card
    loginPage.loginCard().isVisible();
  });
});
