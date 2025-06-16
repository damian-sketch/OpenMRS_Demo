import Component from "../core/Component";
import Button from "./Button";

class Dropdown extends Component{
    getButtonByName(ButtonName){
        return this.componentFactory(Button, `button:contains(${ButtonName})`)
    }
}

export default Dropdown;