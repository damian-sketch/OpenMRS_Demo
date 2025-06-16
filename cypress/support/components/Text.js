import Component from "../core/Component";

class Text extends Component {
  isVisible() {
    return this.getEl().should("be.visible");
  }

  click() {
    return this.getEl().click();
  }
}

export default Text;
