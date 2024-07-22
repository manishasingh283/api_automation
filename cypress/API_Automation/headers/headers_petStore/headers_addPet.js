
const {getGlobal } = require('../../../support/globals');
var accessToken;
var env_petStore = Cypress.env('env_petStore')
var env_petStore_data


before(function () {
  cy.readFile(env_petStore).then((data) => {
    env_petStore_data = data
  })
})


class headers_addPet{
   
  headers_addPet() {
        //orgname=env_shipment_execution_data.workspace_url
        //authority=env_shipment_execution_data.authority
        var headers_addPet = {
            "Content-Type": "application/json",
            "accept": "application/json"
        }
        return headers_addPet
    }

    }

module.exports =headers_addPet;
