exports.config = {
    
    runner: 'local',
    path: '/',
    specs: [
        './test/**/*.js'
    ],
    // exclude: [
    //     './test/**/login.js'
    // ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 3,
        browserName: 'chrome',
        platformName:'windows'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    // path:'/wd/hub',
    // hostname:'192.168.125.187',
    // port:5555,
    protocol:'http',
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', 
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
            }]
        ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    beforeTest: function () {
        const chai = require('chai')
        const chaiWebdriver = require('chai-webdriverio').default
        chai.use(chaiWebdriver(browser))

        global.assert = chai.assert
        global.should = chai.should
        global.expect = chai.expect

    }
}