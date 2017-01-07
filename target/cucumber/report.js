$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("annotation.feature");
formatter.feature({
  "line": 1,
  "name": "annotation",
  "description": "",
  "id": "annotation",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "#This is how background can be used to eliminate duplicate steps"
    }
  ],
  "line": 4,
  "name": "",
  "description": "User navigates to Facebook",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#Scenario with AND"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "id": "annotation;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter username as \"TOM\"",
  "keyword": "When "
});
formatter.match({
  "location": "annotation.goToFacebook()"
});
formatter.result({
  "duration": 6367711403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TOM",
      "offset": 21
    }
  ],
  "location": "annotation.enterUsername(String)"
});
formatter.result({
  "duration": 179899415,
  "status": "passed"
});
});