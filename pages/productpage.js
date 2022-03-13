const elementUtil = require('../util/elementUtil');


class productPage {
    //page locators:
    get inventoryitemname() { return $$('//*[@class="inventory_item_name"]') }
    get inventoryitemprice() { return $$('//*[contains(@class,"inventory_item_price")]') }
    get inventoryitemdesc() { return $$('//*[@class="inventory_item_desc"]') }

    //page actions:

    verifyInventoryItem(name,value) {
        const ele = name
        for(var i = 0; i<value.length; i++) {
            for(var j = 0; j<name.length; j++) {
                if(i==j){
            elementUtil.VerifyText(name[j],value[i]);
         }
        }
     }
    }
}
module.exports = new productPage()