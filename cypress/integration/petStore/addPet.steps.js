
/// <reference types="cypress-cucumber-preprocessor" />

const payloads_addPet = require('../../API_Automation/payloads/payloads_petstore/payloads_addPet.js')
const payloads_addPet1=new payloads_addPet();

const headers_addPet = require('../../API_Automation/headers/headers_petStore/headers_addPet.js')
const headers_addPet1=new headers_addPet();

const Custom_api_addPet = require('../../API_Automation/custom_api/custom_api_petStore/custom_api_addPet.js')
const Custom_api_addPet1=new Custom_api_addPet();

const resources_addPet=require('../../API_Automation/resources/resources_petStore/resources_addPet.js')
const resources_addPet1=new resources_addPet()

var url,petName,id,response_status_code,response_status_ok,response
var env_petStore= Cypress.env('env_petStore')
var env_petStore_data



const {setGlobal } = require('../../support/globals.js');

before(function () {
  cy.readFile(env_petStore).then((data) => {
    env_petStore_data = data
  })
})



Given ('User fetches petName and id - Add Pet', async function () {
  url = env_petStore_data.api_base_url + resources_addPet1.resources_addPet()
  cy.log("URL Is: " + url)
  petName="Crocodile",
  id="1"
})

Given ('User fetches invalid petName and id - Add Pet', async function () {
  url = env_petStore_data.api_base_url + resources_addPet1.resources_addPet()
  cy.log("URL Is: " + url)
  id="dog"
  
})



When('User pass the required fields and hit the API - Add Pet',async function () {
  try {
      await Custom_api_addPet1.api_addPet('POST', url, petName, id);
  }
  catch (error) {

      console.error("Error:", error.message);
  
  }
  cy.log( " URL IS : " + url)
  cy.log( " PAYLAOD IS : " + JSON.stringify(payloads_addPet1.payloads_addPet(petName, id)))
  cy.log( " HEADER IS : " + JSON.stringify( headers_addPet1.headers_addPet()))
 })

Then('Pet Should be added successfully- Add Pet',async function () {
response_status_code = await Custom_api_addPet1.addPet_response_status_code()
expect(response_status_code).to.equal (200)
cy.log("Status code: " + response_status_code)
response_status_ok = await Custom_api_addPet1.addPet_response_status_ok()
expect(response_status_ok).to.equal ("available")
})


Then('Pet Should not be added successfully- Add Pet',async function () {
  response=await Custom_api_addPet1.getStatusCode()
  expect(response).to.equal (500)
  })


