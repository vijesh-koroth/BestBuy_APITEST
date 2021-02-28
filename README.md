# BestBuy_APITEST
Best buy API play ground

**How to execute the test**

Using Cypress UI
1. Use cypress UI to execute the script
2. Use the following command to initiate cypress UI - cypress open
3. Click on "01-bestbuy_api_deleteTV" test
4. The results and validation assertions can be seen in the cypress UI itself

Using terminal
1. Use the following command to execute the script from terminal/ command prompt
2. cypress run --spec "Cypress/integration/01-bestbuy_api_deleteTV.js"
3. Please note some of the cypress assertions may not be shown in the terminal

**Scenarios covered in the test**
1. Delete all products under “TVs” category with shipping cost between 5 and 25 (inclusive). Verify if the products are deleted (60mins)
2. Try to delete a product that does not exist. Verify that an error is thrown (30mins)

