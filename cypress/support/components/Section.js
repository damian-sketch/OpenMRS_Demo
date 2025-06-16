import Component from "../core/Component";
import Button from "./Button";
import Card from "./Card";
import Text from "./Text";

class Section extends Component {
  isVisible() {
    return this.getEl().should("be.visible");
  }

  getActiveVisitsCard() {
    return this.componentFactory(
      Card,
      '[data-extension-id="active-visits-tile"]',
    );
  }

  getTotalVisitsCard() {
    return this.componentFactory(
      Card,
      '[data-extension-id="total-visits-tile"]',
    );
  }

  getScheduledVisitsCard() {
    return this.componentFactory(
      Card,
      '[data-extension-id="home-appointments-tile"]',
    );
  }

  expandAllRowsBtn() {
    return this.componentFactory(Button, '[aria-label="Expand all rows"]');
  }

  getColumnName(ColumnName) {
    return this.componentFactory(Text, `div:contains(${ColumnName})`);
  }
}

export default Section;
