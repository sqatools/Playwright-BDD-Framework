import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';

Given('I am on the login page', async ({ loginPage }) => {
  await loginPage.open();
});

When('I log in as {string} with password {string}', async ({ loginPage }, user: string, pass: string) => {
  await loginPage.login(user, pass);
});

When('I log in with the default user', async ({ loginPage }) => {
  await loginPage.login(process.env.SHOP_USER!, process.env.SHOP_PASSWORD!);
});

Then('I should see the greeting {string}', async ({ loginPage }, greeting: string) => {
  await expect(loginPage.accountLabel).toHaveText(greeting);
});

Then('I should see the login error {string}', async ({ loginPage }, message: string) => {
  await expect(loginPage.error).toHaveText(message);
});