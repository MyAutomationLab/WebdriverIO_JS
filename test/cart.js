const configData = require('../data/data')
const loginPage = require('../pages/loginpage')
const cartPage = require('../pages/cartpage')

describe("verify Add and remove from cart feature test", function(){
    
    it('user navigate to login page', function(){
        browser.url('/')
    })

    it("user enter value in a field", function(){
        loginPage.doLogin(configData.username,configData.password);   
    })

    it("user adds item from the catalogue to the cart by pressing add to cart button", function(){
       cartPage.cartClick(cartPage.addtocart);   
    })

    it("user should see 6 items added into the cart", function(){
        cartPage.getCartIconCount(configData.AddToCartCount);
    })

    it("user removes item from the cart by pressing remove button on each of the selected item from catalogue", function(){
        cartPage.cartClick(cartPage.removefromcart); 
    })

    it("user shouldn't see any number icon into the cart", function(){
        cartPage.getCartIconCount(configData.RemoveFromCartCout);
    })

});