const elementUtil = require('../util/elementUtil');


class cartPage {
    //page locators:
    get carticon() { return $('//*[contains(@class,"shopping_cart")]') }
    get addtocart() { return $$('//*[contains(@id,"add-to-cart")]') }
    get removefromcart() { return $$('//*[contains(@id,"remove")]') }

    //page actions:
    cartClick(value) {
        const ele = value
       ele.forEach(function(i) {
            elementUtil.doClick(i);
        });
    }

    getCartIconCount(value) {
        elementUtil.VerifyText(this.carticon,value)      
    }
}
module.exports = new cartPage()