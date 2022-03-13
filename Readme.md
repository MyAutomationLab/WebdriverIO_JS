WebdriverIO Mocha Framework
The project uses WebdriverIO and JavaScript. It includes the PageObject pattern and provides parallel execution

Folder Structure:
├── ...
│
├── data 
│   │
│   ├── data.js                         # Test data for validation
│
├── pages                               # Generic functionality for tests
│   |
│   ├── cartpage.js                     
│   ├── login.js   
│   ├── productpage.js                
│   ├── webE2Epage.js  
│
├── test                                # Test suite
│    ├── cart.js                        # Automated Test Script
│    ├── login.js                       # Automated Test Script
│    ├── product.js                     # Automated Test Script
│    ├── webE2E.js                      # Automated Test Script
│
│
├── utils                               # Utility files for testing
│    ├──elementUtil.js                  
│
└─── config.js                          # User data for input
Requirements
node
npm
Getting Started
Install the dependencies:

npm install

Run e2e tests:

npm run test
Generate/Open allure reporter
In the terminal, perform npm run report to open allure report port. Report will be opened in default browser
Key Features
- Allure Report
- Mocha framework
- Page Object Design pattern
- Test Data sourced from json file
- Environment set from commandline