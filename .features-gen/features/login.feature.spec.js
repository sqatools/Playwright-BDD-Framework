// Generated from: features\login.feature
import { test } from "../../steps/fixtures.ts";

test.describe('Login', () => {

  test.beforeEach('Background', async ({ Given, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the login page', null, { loginPage }); 
  });
  
  test('Successful login with the default user', { tag: ['@login', '@smoke'] }, async ({ When, Then, loginPage }) => { 
    await When('I log in with the default user', null, { loginPage }); 
    await Then('I should see the greeting "Hi, Test"', null, { loginPage }); 
  });

  test.describe('Login fails for <case>', () => {

    test('Login fails for wrong password', { tag: ['@login'] }, async ({ When, Then, loginPage }) => { 
      await When('I log in as "testuser" with password "wrong"', null, { loginPage }); 
      await Then('I should see the login error "Invalid username or password."', null, { loginPage }); 
    });

    test('Login fails for locked account', { tag: ['@login'] }, async ({ When, Then, loginPage }) => { 
      await When('I log in as "lockeduser" with password "Test@123"', null, { loginPage }); 
      await Then('I should see the login error "This account is locked. Please contact support."', null, { loginPage }); 
    });

    test('Login fails for empty fields', { tag: ['@login'] }, async ({ When, Then, loginPage }) => { 
      await When('I log in as "" with password ""', null, { loginPage }); 
      await Then('I should see the login error "Username and password are required."', null, { loginPage }); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('before', {  }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":11,"tags":["@login","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I log in with the default user","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see the greeting \"Hi, Test\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Hi, Test\"","children":[{"start":27,"value":"Hi, Test","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":21,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I log in as \"testuser\" with password \"wrong\"","stepMatchArguments":[{"group":{"start":12,"value":"\"testuser\"","children":[{"start":13,"value":"testuser","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":37,"value":"\"wrong\"","children":[{"start":38,"value":"wrong","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see the login error \"Invalid username or password.\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Invalid username or password.\"","children":[{"start":30,"value":"Invalid username or password.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":22,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I log in as \"lockeduser\" with password \"Test@123\"","stepMatchArguments":[{"group":{"start":12,"value":"\"lockeduser\"","children":[{"start":13,"value":"lockeduser","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"Test@123\"","children":[{"start":40,"value":"Test@123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see the login error \"This account is locked. Please contact support.\"","stepMatchArguments":[{"group":{"start":29,"value":"\"This account is locked. Please contact support.\"","children":[{"start":30,"value":"This account is locked. Please contact support.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":23,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I log in as \"\" with password \"\"","stepMatchArguments":[{"group":{"start":12,"value":"\"\"","children":[{"start":13,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":29,"value":"\"\"","children":[{"start":30,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see the login error \"Username and password are required.\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Username and password are required.\"","children":[{"start":30,"value":"Username and password are required.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end