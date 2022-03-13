const elementUtil = require('../util/elementUtil');
const constants = require('../constants');


class LoginPage {
    //page locators:
    get username() { return $('#user-name') }
    get password() { return $('#password') }
    get loginBtn() { return $('#login-button') }
    get error_msg() { return $('//*[@data-test="error"]') }
   

    //page actions:
    getPageTitle() {
        return elementUtil.doGetPageTitle(constants.LOGIN_PAGE_TITLE)
    }
    clickLogin() {
        elementUtil.doClick(this.loginBtn)
    }
    doLogin(emailID, pwd) {
        elementUtil.doSetValue(this.username, emailID)
        elementUtil.doSetValue(this.password, pwd)
        elementUtil.doClick(this.loginBtn)
    }
    verifyErrorMessageWithoutData(emailID) {
        elementUtil.VerifyText(this.error_msg,"Epic sadface: Username is required")
        elementUtil.doSetValue(this.username, emailID)
        elementUtil.doClick(this.loginBtn)
        elementUtil.VerifyText(this.error_msg,"Epic sadface: Password is required")
    }
    verifyErrorMessageLockedUser() {
        elementUtil.VerifyText(this.error_msg,"Epic sadface: Sorry, this user has been locked out.")
    }
}
module.exports = new LoginPage()