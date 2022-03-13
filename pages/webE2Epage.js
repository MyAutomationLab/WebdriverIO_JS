const elementUtil = require('../util/elementUtil');
const configData = require('../config');
const { assert } = require('chai');

class webE2EPage {
    //page locators:
    get selectItem() { return $('(//*[contains(@id,"add-to-cart")])[1]') }
    get carticon() { return $('//*[contains(@class,"shopping_cart")]') }
    get checkoutbuttotn() { return $('#checkout') }
    get firstName() { return $('#first-name') }
    get lastName() { return $('#last-name') }
    get zipCode() { return $('#postal-code') }
    get continuebutton() { return $('#continue') }
    get finishbutton() { return $('#finish') }
    get successMessage() { return $('//*[text()="THANK YOU FOR YOUR ORDER"]') }
   
    //page actions:
   clickButton(element){
        elementUtil.doClick(element)

    }

    enterShippingDetail(){
        elementUtil.doSetValue(this.firstName,configData.FirstName)
        elementUtil.doSetValue(this.lastName,configData.LastName)
        elementUtil.doSetValue(this.zipCode,configData.zipcode)
    }

    verifySuccessMessage(){
        expect(this.successMessage.isDisplayed);
    }
   
}
module.exports = new webE2EPage()