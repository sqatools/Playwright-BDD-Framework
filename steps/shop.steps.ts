import { expect } from '@playwright/test';
import { DataTable } from 'playwright-bdd';
import { Given, When, Then } from './fixtures';

Given('I am on the shop home page', async ({ productListPage }) => {
  await productListPage.open();
});

When('I search for {string}', async ({ productListPage }, term: string) => {
  await productListPage.search(term);
});

Then('the results title should be {string}', async ({ productListPage }, title: string) => {
  await expect(productListPage.listingTitle).toHaveText(title);
});

Then('I should see {int} product(s)', async ({ productListPage }, count: number) => {
  await expect(productListPage.resultCount).toContainText(`${count} product`);
});

Then('I should see the product {string}', async ({ productListPage }, name: string) => {
  await expect(productListPage.productNames.getByText(name, { exact: true })).toBeVisible();
});

Then('I should see the no results message', async ({ productListPage }) => {
  await expect(productListPage.noResults).toContainText('No products found');
});

When('I add these products to the cart:', async ({ productListPage }, table: DataTable) => {
  for (const row of table.hashes()) {
    await productListPage.addToCart(row.product);
  }
});

Then('the cart badge should show {int}', async ({ productListPage }, count: number) => {
  await expect(productListPage.cartCount).toHaveText(String(count));
});

When('I open the cart', async ({ productListPage }) => {
  await productListPage.openCart();
});

Then('the cart should contain:', async ({ cartPage }, table: DataTable) => {
  const expected = table.hashes().map((row) => row.product);
  await expect(cartPage.itemNames).toHaveText(expected);
});

When('I apply the coupon {string}', async ({ cartPage }, code: string) => {
  await cartPage.applyCouponCode(code);
});

Then('the coupon message should be {string}', async ({ cartPage }, message: string) => {
  await expect(cartPage.couponMessage).toHaveText(message);
});