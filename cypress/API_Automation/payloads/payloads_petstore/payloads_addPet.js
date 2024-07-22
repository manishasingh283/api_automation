
class payloads_addPet {
   
    payloads_addPet(name, id)  {
    
        var payloads_addPet =  

        {
                "id": 1,
                "category": {
                  "id": id,
                  "name": "string"
                },
                "name": name,
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 1,
                    "name": "string"
                  }
                ],
                "status": "available"
              
        }
        return payloads_addPet
    }

   
}

module.exports  =payloads_addPet;