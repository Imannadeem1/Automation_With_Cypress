const { defineConfig } = require('cypress'); 

module.exports = defineConfig({
  e2e: {
    
    reporter: "mochawesome",
    reporterOptions: {
      overwrite: false,

    }

  },
});
