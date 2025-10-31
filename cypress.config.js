const { defineConfig } = require("cypress");
// --------------------------------
// Multi configuratiion file.
// Promisified fs module :

const fs = require('fs-extra')
const path = require('path')


function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found");
    return {};

  }
  return fs.readJson(pathToConfigFile)
}
//------------------------------

module.exports = defineConfig({
  projectId: '419217',

  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); // HTML report.
    },

    reporter: 'cypress-mochawesome-reporter',// HTML report will generate
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    // We can call base url : ("/") call 
    baseUrl: "https://webdriveruniversity.com/",
    testIsolation: false,
    chromeWebSecurity: false,
    // We can seth the timeouts from here.
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,

    retries: {
      runMode: 0,
      openMode: 1
    },


    // dynamic url : we can call by name (Cypress.env("url")+next page url to access. Befor each is must)
    env: {
      webDriver_homePage: "https://webdriveruniversity.com/",
      automation_homePage: "https://automationteststore.com/"
    },
    // screenshotOnRunFailure :true,
    // trashAssetsBeforeRuns:true,
    video: true,                 // record videos on cypress run
    videoUploadOnPasses: true,
    videosFolder: 'cypress/videos', // (optional) custom path
    videoCompression: 32,        // 0 = no compression; default 32
    videoUploadOnPasses: false,  // keep only failed test videos
    trashAssetsBeforeRuns: true, // clean screenshots/videos before run
    viewportHeight: 1080,
    viewportWidth: 1920

  },
});
