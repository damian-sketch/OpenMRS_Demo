import Component from "../core/Component";

class Button extends Component {
  click() {
    this.getEl().click();
  }
}

export default Button;
