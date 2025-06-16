export default class Component {
  constructor(element) {
    if (typeof element !== "function") {
      throw new Error("element parameter has to be a function");
    }
    this.getEl = element;
  }

  componentFactory(component, selector) {
    const selection = () => this.getEl().find(selector);
    return new component(selection);
  }
}
