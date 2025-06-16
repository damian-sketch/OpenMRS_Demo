import Component from "../core/Component";

class Radio extends Component{
    click(){
        return this.getEl().click();
    }
}

export default Radio;