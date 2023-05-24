const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gyn6sx",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});