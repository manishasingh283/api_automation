
/// <reference types="cypress-cucumber-preprocessor" />


const headers_addPet = require('../../API_Automation/headers/headers_petStore/headers_addPet.js')
const headers_addPet1=new headers_addPet();

const Custom_api_getPet = require('../../API_Automation/custom_api/custom_api_petStore/custom_api_getPet.js')
const Custom_api_getPet1=new Custom_api_getPet();

const resources_getPet=require('../../API_Automation/resources/resources_petStore/resources_getPet.js')
const resources_getPet1=new resources_getPet()

var url,id,response_status_code,response_status_ok,response
var env_petStore= Cypress.env('env_petStore')
var env_petStore_data


before(function () {
  cy.readFile(env_petStore).then((data) => {
    env_petStore_data = data
  })
})



Given ('User fetches id - Get Pet', async function () {
    id=1
    url = env_petStore_data.api_base_url + resources_getPet1.resources_getPet(id)
  cy.log("URL Is: " + url)
  
})

When('User pass the required fields and hit the API - Get Pet',async function () {
  try {
      await Custom_api_getPet1.api_getPet('GET', url);
  }
  catch (error) {

      console.error("Error:", error.message);
  
  }
  cy.log( " URL IS : " + url)
  cy.log( " HEADER IS : " + JSON.stringify( headers_addPet1.headers_addPet()))
 })


Then('Pet Should be fetched successfully- Get Pet',async function () {
response_status_code = await Custom_api_getPet1.getPet_response_status_code()
expect(response_status_code).to.equal (200)
cy.log("Status code: " + response_status_code)
response_status_ok = await Custom_api_getPet1.getPet_response_status_ok()
expect(response_status_ok).to.equal ("available")
})

Then('Pet Should not be fetched successfully- Get Pet',async function(){
    response=await Custom_api_getPet1.getStatusCode()
    expect(response).to.equal (404)
})




