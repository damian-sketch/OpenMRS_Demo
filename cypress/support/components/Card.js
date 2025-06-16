import Component from "../core/Component";
import Button from "./Button";
import Input from "./Input";

class Card extends Component {
  isVisible() {
    return this.getEl().should("be.visible");
  }

  usernameInput() {
    return this.componentFactory(Input, "#username");
  }

  passwordInput() {
    return this.componentFactory(Input, "#password");
  }

  getButtonByName(ButtonName) {
    return this.componentFactory(Button, `button:contains("${ButtonName}")`);
  }
}

export default Card;
