const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev3.openmrs.org/openmrs/spa/',
    specPattern: './cypress/integration'
  },
});
