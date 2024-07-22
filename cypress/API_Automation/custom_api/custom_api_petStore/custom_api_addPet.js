
const payloads_addPet =require('../../payloads/payloads_petstore/payloads_addPet')
const payloads_addPet1 = new payloads_addPet()
const headers_addPet =require('../../headers/headers_petStore/headers_addPet')
const headers_addPet1 = new headers_addPet()

const axios = require('axios');
var response_addPet,response_status

const {setGlobal } = require('../../../support/globals');


class Custom_api_addPet {

    async api_addPet(method, url,petName,id) { 
        await axios({
            method: method,
            url: url,
            failOnStatusCode: false,
            validateStatus: function (status) {
                response_status=status
                return true; // Resolve the promise for all HTTP status codes
            },
            data:  payloads_addPet1.payloads_addPet(petName,id),
            headers: headers_addPet1.headers_addPet(),
        }).then(function (response) {
            response_addPet = response
            cy.log("response>>"+ JSON.stringify(response_addPet))
           
        })
    }

    async  addPet_response_status_code(){
       return response_addPet.status
    }

    async  addPet_response_status_ok(){
        return response_addPet.data.status
     }

     async getStatusCode(){
        return response_status
     }





}
module.exports = Custom_api_addPet;