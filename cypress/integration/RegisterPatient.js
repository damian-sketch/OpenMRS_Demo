import HomePage from "../support/pages/HomePage";
import LoginPage from "../support/pages/LoginPage";
import PatientRegistration from "../support/pages/PatientRegistrationPage";
import * as data from "../fixtures/data.json";

const loginPage = new LoginPage();
const homePage = new HomePage();
const registerPage = new PatientRegistration();

// ensure user is logged in first
beforeEach(() => {
  loginPage.visitPage();
  loginPage.loginCard().usernameInput().type(Cypress.env("valid_user"));
  loginPage.loginCard().getButtonByName("Continue").click();
  loginPage.loginCard().passwordInput().type(Cypress.env("valid_pass"));
  loginPage.loginCard().getButtonByName("Log in").click();
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

// this will only cover filling in the mandatory fields and a few optional fields for demo purposes
describe("Successfully register a new patient", () => {
  it("Fill in mandatory details and register a new patient", () => {
    registerPage.visitPage();
    registerPage.patientsNameKnownBtn().click();
    registerPage.firstNameInput().type(data.firstName);
    registerPage.middleNameInput().type(data.middleName);
    registerPage.familyNameInput().type(data.familyName);
    registerPage.unknownSexOption().click();
    registerPage.dobUnknownBtn().click();
    registerPage.estimatedYearsInput().type(data.age);
    registerPage.addressInputField().type(data.address);
    registerPage.countryInputField().type(data.country);
    registerPage.getButtonByName("Register patient").click();
    // verify that a success notification is shown
    registerPage.alertNotification().verifyText("New Patient Created");
  });
});
