const configData = require('../config');
const loginPage = require('../pages/loginpage')
const productPage = require('../pages/productpage')
const testData = require('../data/data');

describe("verify Title, Description and Value of each items matches with given data", function(){

    it('user navigate to login page', function(){
        browser.url('/')
    })

    it("user enter value in a field", function(){
        loginPage.doLogin(configData.username,configData.password); 
           
    })

    it("user should see each item has correct title", function(){
        productPage.verifyInventoryItem(productPage.inventoryitemname,testData.itemtitle);   
    })

    it("user should see each item has correct description", function(){
        productPage.verifyInventoryItem(productPage.inventoryitemdesc,testData.itemdesc); 
    })

    it("user should see each item has correct value", function(){
        productPage.verifyInventoryItem(productPage.inventoryitemprice,testData.itemvalue);
    })
});