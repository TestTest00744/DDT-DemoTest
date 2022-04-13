$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/D:/DDTFramework/CucumberDDTFramework/Features/Login.feature");
formatter.feature({
  "name": "Testing Login To Vtiger Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Checking Login Functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": ": Open Chrome and Launch Vtiger Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDetails.open_Chrome_and_Launch_Vtiger_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": Title of the Application Vtiger",
  "keyword": "When "
});
formatter.match({
  "location": "LoginDetails.title_of_the_Application_Vtiger()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": Enter Username and Password in EditBox",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDetails.enter_Username_and_Password_in_EditBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": Click on SignIn Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDetails.click_on_SignIn_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": Home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDetails.home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDetails.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
});