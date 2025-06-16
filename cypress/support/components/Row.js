import Component from "../core/Component";
import Button from "./Button";
import Dropdown from "./Dropdown";

class Row extends Component {
  getUserProfileButton() {
    return this.componentFactory(Button, "[name='User']");
  }

  getUserMenuDropdown() {
    return this.componentFactory(Dropdown, '[aria-label="User menu"]');
  }
}

export default Row;
