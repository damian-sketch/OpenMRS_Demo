import HomePage from "../support/pages/HomePage";
import LoginPage from "../support/pages/LoginPage";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe("User attempts to login with different credentials", () => {
  it("Should successfully login with valid credentials", () => {
    // visit login page and enter valid credentials
    loginPage.visitPage();
    loginPage.loginCard().usernameInput().type(Cypress.env("valid_user"));
    loginPage.loginCard().getButtonByName("Continue").click();
    loginPage.loginCard().passwordInput().type(Cypress.env("valid_pass"));
    // submit the login details
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

  it("Should show error for attempted login with invalid credentials", () => {
    // visit the login page and enter invalid credentials
    loginPage.visitPage();
    loginPage.loginCard().usernameInput().type(Cypress.env("wrong_user"));
    loginPage.loginCard().getButtonByName("Continue").click();
    loginPage.loginCard().passwordInput().type(Cypress.env("wrong_pass"));
    // intercept the network request
    cy.intercept({
      method: "GET",
      url: "**/session",
    }).as("loggedIn");
    // submit the invalid credentials
    loginPage.loginCard().getButtonByName("Log in").click();
    // verify the authentication status in the response
    cy.wait("@loggedIn").then((interception) => {
      // verify 'authenticated' status is false
      expect(interception.response.body.authenticated).to.eq(false);
    });
    // verify an error notification is shown with the correct message
    loginPage.getNotificationToast().verifyText("Invalid username or password");
  });
});
