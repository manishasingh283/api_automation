const headers_addPet =require('../../headers/headers_petStore/headers_addPet')
const headers_addPet1 = new headers_addPet()

const axios = require('axios');
var response_getPet



class Custom_api_deletePet {

    async api_deletePet(method,url) { 
        await axios({
            method: method,
            url: url,
            params: null,
            headers: headers_addPet1.headers_addPet(),
        }).then(function (response) {
            response_getPet = response
            cy.log("response>>"+ JSON.stringify(response_getPet))
           
        })
    }

    async  getPet_response_status_code(){
       return response_getPet.status
    }

    async  getPet_response_status_ok(){
        return response_getPet.data.status
     }


}
module.exports = Custom_api_deletePet;