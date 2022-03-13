const configData = require('../config');
const loginPage = require('../pages/loginpage')

// This is a BDD test using mocha javascript framework

describe("verify error popup without passing input data", function(){

    it('user navigate to login page', function(){
        browser.url('/')
    })
    it("user click on login button", function(){
        loginPage.clickLogin();   
    })
    it("user should see error popup if don't enter username and password", function(){
        loginPage.verifyErrorMessageWithoutData(configData.username);   
    })

});

describe("verify error popup for locked user", function(){

    it("enter value in a field", function(){
        loginPage.doLogin(configData.lockedusername,configData.password);      
    })
    it("user should see error popup if don't enter username and password", function(){
        loginPage.verifyErrorMessageLockedUser();   
    })

});

describe("verify successful login", function(){
   
    it("enter value in a field", function(){
        loginPage.doLogin(configData.username,configData.password);     
    })

});



  