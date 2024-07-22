
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
 module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  console.log(config);
}
/// <reference types="cypress" />
/// <reference types="cypress-cucumber-preprocessor" />

const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default



function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  console.log(pathToConfigFile);
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  // accept a configFile value or use dev by default
  on('file:preprocessor', cucumber())
  const file = config.env.configFile || 'production'
  return getConfigurationByFile(file)
}

// deleteReports.js
//const fs = require("fs");
//fs.rmdirSync("./cypress/reports", { recursive: true });
