import Component from "../core/Component";
import Text from "./Text";

class Input extends Component {
  type(text) {
    this.getEl().clear().type(text);
    return this;
  }

  click() {
    return this.getEl().click();
  }

  getOptionByName(OptionName) {
    return this.componentFactory(Text, `option:contains(${OptionName})`);
  }

  select(Option) {
    return this.getEl().select(Option);
  }
}

export default Input;
