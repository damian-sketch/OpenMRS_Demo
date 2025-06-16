import LoginPage from "../support/pages/LoginPage";

const loginPage = new LoginPage();

export default function login(username, password) {
  loginPage.visitPage();
  loginPage.loginCard().usernameInput().type(username);
  loginPage.loginCard().getButtonByName("Continue").click();
  loginPage.loginCard().passwordInput().type(password);
  loginPage.loginCard().getButtonByName("Log in").click();
}
