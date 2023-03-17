# Assessment_YC

Assessment - Automation | Senior Quality Assurance Engineer : Swivel Group

## Setting up the project

### Clone and set up the `Assessment_YC` repo
```
$ git clone 
$ cd Assessment_YC
$ npm install
```

### Running e2e specs
You can use one of following command to execute all the tests with headed mode.
```
npm run test 
```
```
./node_modules/.bin/wdio wdio.conf.js
```

If you need to run the tests in headless mode with Chrome & Firefox browsers , please follow the below mentioned steps
```
Go to wdio.conf.js file
Uncomment the 61,62,63,69,70 & 71 lines
```

Execute below mentioned command to generate the HTML report 
```
allure generate ./allure-results -clear
```
```
 allure open
```
### State Chalanges/Issues

Starting the task without having no experience on Webdriver.io
Cannot execute the test on Microsoft Edge browser in headless mode 
