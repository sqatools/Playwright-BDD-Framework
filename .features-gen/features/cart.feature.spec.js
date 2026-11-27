// Generated from: features\cart.feature
import { test } from "../../steps/fixtures.ts";

test.describe('Shopping cart', () => {

  test.beforeEach('Background', async ({ Given, productListPage }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the shop home page', null, { productListPage }); 
  });
  
  test('Add two products and apply a coupon', { tag: ['@cart', '@smoke'] }, async ({ When, Then, cartPage, productListPage }) => { 
    await When('I add these products to the cart:', {"dataTable":{"rows":[{"cells":[{"value":"product"}]},{"cells":[{"value":"RGB Gaming Mouse"}]},{"cells":[{"value":"1080p Webcam"}]}]}}, { productListPage }); 
    await Then('the cart badge should show 2', null, { productListPage }); 
    await When('I open the cart', null, { productListPage }); 
    await Then('the cart should contain:', {"dataTable":{"rows":[{"cells":[{"value":"product"}]},{"cells":[{"value":"RGB Gaming Mouse"}]},{"cells":[{"value":"1080p Webcam"}]}]}}, { cartPage }); 
    await When('I apply the coupon "SAVE10"', null, { cartPage }); 
    await Then('the coupon message should be "Coupon SAVE10 applied."', null, { cartPage }); 
  });

  test('An invalid coupon is rejected', { tag: ['@cart'] }, async ({ When, Then, And, cartPage, productListPage }) => { 
    await When('I add these products to the cart:', {"dataTable":{"rows":[{"cells":[{"value":"product"}]},{"cells":[{"value":"RGB Gaming Mouse"}]}]}}, { productListPage }); 
    await And('I open the cart', null, { productListPage }); 
    await And('I apply the coupon "BOGUS"', null, { cartPage }); 
    await Then('the coupon message should be "This coupon code is not valid."', null, { cartPage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('before', {  }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@cart","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the shop home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I add these products to the cart:","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should show 2","stepMatchArguments":[{"group":{"start":27,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I open the cart","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the cart should contain:","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I apply the coupon \"SAVE10\"","stepMatchArguments":[{"group":{"start":19,"value":"\"SAVE10\"","children":[{"start":20,"value":"SAVE10","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then the coupon message should be \"Coupon SAVE10 applied.\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Coupon SAVE10 applied.\"","children":[{"start":30,"value":"Coupon SAVE10 applied.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":22,"tags":["@cart"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the shop home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I add these products to the cart:","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And I open the cart","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"And I apply the coupon \"BOGUS\"","stepMatchArguments":[{"group":{"start":19,"value":"\"BOGUS\"","children":[{"start":20,"value":"BOGUS","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then the coupon message should be \"This coupon code is not valid.\"","stepMatchArguments":[{"group":{"start":29,"value":"\"This coupon code is not valid.\"","children":[{"start":30,"value":"This coupon code is not valid.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end