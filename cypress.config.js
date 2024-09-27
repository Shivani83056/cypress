const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
async function setupNodeEvents(on, config) {
  // implement node event listeners here
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    //specPattern:('cypress/integration/*/*.js')
      // implement node event listeners here
     // specPattern: "cypress/support/Steps/*.feature"
     // specPattern: "cypress/features/*.feature"
     specPattern:'cypress/pagetest/shiv.js'
    
    },
    
    
  
});
