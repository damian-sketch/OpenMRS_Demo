import Component from "../core/Component";

class Toast extends Component {
  isVisible() {
    return this.getEl().should("be.visible");
  }

  verifyText(TextName) {
    return this.getEl()
      .invoke("text")
      .then((text) => {
        expect(text).to.contain(`${TextName}`);
      });
  }
}

export default Toast;
