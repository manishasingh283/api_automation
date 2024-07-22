
/// <reference types="cypress-cucumber-preprocessor" />

const payloads_addUser = require('../../API_Automation/payloads/payloads_petstore/payloads_addUser.js')
const payloads_addUser1=new payloads_addUser();

const headers_addPet = require('../../API_Automation/headers/headers_petStore/headers_addPet.js')
const headers_addPet1=new headers_addPet();

const Custom_api_addUser = require('../../API_Automation/custom_api/custom_api_petStore/custom_api_addUser.js')
const Custom_api_addUser1=new Custom_api_addUser();

const resources_addUser=require('../../API_Automation/resources/resources_petStore/resources_addUser.js')
const resources_addUser1=new resources_addUser()

var url,UserName,id,response_status_code,response_status_ok
var env_petStore= Cypress.env('env_petStore')
var env_petStore_data



const {setGlobal } = require('../../support/globals.js');

before(function () {
  cy.readFile(env_petStore).then((data) => {
    env_petStore_data = data
  })
})



Given ('User fetches url - Add User', async function () {
  url = env_petStore_data.api_base_url + resources_addUser1.resources_addUser()
  cy.log("URL Is: " + url)
  
})


When('User pass the required fields and hit the API - Add User',async function () {
  try {
      await Custom_api_addUser1.api_addUser('POST', url, UserName, id);
  }
  catch (error) {

      console.error("Error:", error.message);
  
  }
  cy.log( " URL IS : " + url)
  cy.log( " PAYLAOD IS : " + JSON.stringify(payloads_addUser1.payloads_addUser()))
  cy.log( " HEADER IS : " + JSON.stringify( headers_addPet1.headers_addPet()))
 })

Then('User Should be added successfully- Add User',async function () {
response_status_code = await Custom_api_addUser1.addUser_response_status_code()
expect(response_status_code).to.equal (200)
})




