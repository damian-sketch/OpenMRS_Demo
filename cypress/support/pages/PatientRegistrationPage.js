import Button from "../components/Button";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Toast from "../components/Toast";
import Page from "../core/Page";

class PatientRegistration extends Page {
  constructor() {
    super();
    this.setUrl("/patient-registration");
  }
  // "Is Patient's name known?", 'Yes' option
  patientsNameKnownBtn() {
    return this.componentFactory(Button, `[title="Yes"]:eq(0)`);
  }

  // "Is Patient's name known?", 'No' option
  patientsNameUnknownBtn() {
    return this.componentFactory(Button, `[title="No"]:eq(0)`);
  }

  firstNameInput() {
    return this.componentFactory(Input, "#givenName");
  }

  middleNameInput() {
    return this.componentFactory(Input, "#middleName");
  }

  familyNameInput() {
    return this.componentFactory(Input, "#familyName");
  }

  maleSexOption() {
    return this.componentFactory(Radio, "#gender-option-male");
  }

  femaleSexOption() {
    return this.componentFactory(Radio, "#gender-option-female");
  }

  otherSexOption() {
    return this.componentFactory(Radio, "#gender-option-other");
  }

  unknownSexOption() {
    return this.componentFactory(Radio, 'span:contains("Unknown")');
  }

  // "Date of Birth known?", 'Yes' option
  dobKnownBtn() {
    return this.componentFactory(Button, `[title="Yes"]:eq(1)`);
  }

  // "Date of Birth known?", 'No' option
  dobUnknownBtn() {
    return this.componentFactory(Button, `[title="No"]:eq(1)`);
  }

  birthDateInput() {
    return this.componentFactory(Input, "#birthdate");
  }

  addressInputField() {
    return this.componentFactory(Input, "#address1");
  }

  countryInputField() {
    return this.componentFactory(Input, "#country");
  }

  getButtonByName(ButtonName) {
    return this.componentFactory(Button, `button:contains(${ButtonName})`);
  }

  relationshipNameInput() {
    return this.componentFactory(Input, '[placeholder="Firstname Familyname"]');
  }

  relationshipTypeInput() {
    return this.componentFactory(
      Input,
      '[name="relationships[0].relationshipType"]',
    );
  }

  estimatedYearsInput() {
    return this.componentFactory(Input, "#yearsEstimated");
  }

  alertNotification() {
    return this.componentFactory(Toast, '[role="alertdialog"]');
  }
}

export default PatientRegistration;
