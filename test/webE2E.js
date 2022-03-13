const configData = require('../config');
const webE2EPage = require('../pages/webE2Epage')
const loginPage = require('../pages/loginpage')

describe("checkout E2E feature", function(){

    it('user navigate to login page', function(){
        browser.url('/')
    })
    it("user enter value in a field", function(){
        loginPage.doLogin(configData.username,configData.password);  
    })

    it("user select one item from the product page", function(){
        webE2EPage.clickButton(webE2EPage.selectItem);
    })

    it("user click on cart icon from the product page", function(){
        webE2EPage.clickButton(webE2EPage.carticon);
    })

    it("user navigate to checkout information page if click on checkout button", function(){
        webE2EPage.clickButton(webE2EPage.checkoutbuttotn);
    })

    it("user enter all the shipping details into chekout information page", function(){
       webE2EPage.enterShippingDetail();
    })

    it("user navigate to checkout review page if click on continue button", function(){
        webE2EPage.clickButton(webE2EPage.continuebutton);
    })

    it("verify successfull message if user click on finish button", function(){
        webE2EPage.clickButton(webE2EPage.finishbutton);
       webE2EPage.verifySuccessMessage();
    })

});