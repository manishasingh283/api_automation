Feature: petStore
  Test petStore


Scenario: Verify if user is able to add valid pet
Given User fetches petName and id - Add Pet
When User pass the required fields and hit the API - Add Pet
Then Pet Should be added successfully- Add Pet

Scenario: Verify if user is able to fetch valid pet(200 Available)
Given User fetches id - Get Pet
When User pass the required fields and hit the API - Get Pet
Then Pet Should be fetched successfully- Get Pet

Scenario: Verify if user is able to DELETE pet details
Given User fetches id - Delete Pet
When User pass the required fields and hit the API - Delete Pet
Then Pet Should be deleted successfully- Delete Pet

Scenario: verify if user is not able to fetch deleted pet details(404 Error)
Given User fetches id - Get Pet
When User pass the required fields and hit the API - Get Pet
Then Pet Should not be fetched successfully- Get Pet

Scenario: To verify user is able to add User
Given User fetches url - Add User
When User pass the required fields and hit the API - Add User
Then User Should be added successfully- Add User

Scenario: To verify if the user is not able to add invalid pet (500 error)
Given User fetches invalid petName and id - Add Pet
When User pass the required fields and hit the API - Add Pet
Then Pet Should not be added successfully- Add Pet














