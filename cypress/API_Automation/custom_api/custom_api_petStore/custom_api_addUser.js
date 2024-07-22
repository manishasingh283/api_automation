
const payloads_addUser =require('../../payloads/payloads_petstore/payloads_addUser')
const payloads_addUser1 = new payloads_addUser()
const headers_addPet =require('../../headers/headers_petStore/headers_addPet')
const headers_addPet1 = new headers_addPet()

const axios = require('axios');
var response_addUser


class Custom_api_addUser {

    async api_addUser(method, url) { 
        await axios({
            method: method,
            url: url,
            data:  payloads_addUser1.payloads_addUser(),
            headers: headers_addPet1.headers_addPet(),
        }).then(function (response) {
            response_addUser = response
            cy.log("response>>"+ JSON.stringify(response_addUser))
           
        })
    }

    async  addUser_response_status_code(){
       return response_addUser.status
    }

    async  addUser_response_status_ok(){
        return response_addUser.data.status
     }

}
module.exports = Custom_api_addUser;