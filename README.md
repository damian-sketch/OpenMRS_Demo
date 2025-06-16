# Preview

This project contains automated test cases for the OpenMRS Demo site written in Javascript and automated using the Cypress framework. CI/CD has also been implemented via Github Actions and a test run can be triggered in the 'Actions' tab.

Tests for the following functionalities have been automated:

- Login with valid and invalid credentials
- Verification of the landing page and its functionality
- Logout
- New patient registration

# Setup Instructions

- Once you clone the repo, first add a `cypress.env.json` file to the root of the project and add the following fields(The actual values have been left out due to security purposes but are available on request):

```
{
    "valid_user": "",
    "valid_pass": "",
    "wrong_user": "",
    "wrong_pass": ""
}
```

- Run `npm install` at the root to install the project's dependencies.

# Dependencies

The dependencies in this project are :

- Cypress
- Mochawesome for reporting
- Prettier for consistent code formatting

# How to run tests

Tests can be run in two ways:

- Headless(without spinning up a browser interface): To do this, run the command `npm run headless`
- By spinning up a browser instance: Run `npm start`. This will show an interface where you can choose the browser to run your tests on.

# Reporting

- Reporting is enabled and reports will be automatically generated when you run the tests in headless mode. A new folder 'reporting' will be generated and inside it is a html file containing the report. This html file can be opened in the browser to view the full report.
- Additionally, when a test fails, cypress will automatically generate a screenshot in the `cypress/screenshots` folder
