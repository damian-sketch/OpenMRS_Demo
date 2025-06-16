import Card from "../components/Card";
import Toast from "../components/Toast";
import Page from "../core/Page";

class LoginPage extends Page {
  constructor() {
    super();
    this.setUrl("/login");
  }

  loginCard() {
    return this.componentFactory(
      Card,
      ".cds--tile.-esm-login__login__loginCard___iiPcZ",
    );
  }

  getNotificationToast() {
    return this.componentFactory(Toast, '[role="status"]');
  }
}

export default LoginPage;
