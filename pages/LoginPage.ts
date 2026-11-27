import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly error: Locator;
  readonly accountLabel: Locator;

  constructor(private readonly page: Page) {
    this.username = page.getByTestId('login-username');
    this.password = page.getByTestId('login-password');
    this.loginButton = page.getByTestId('login-button');
    this.error = page.getByTestId('login-error');
    this.accountLabel = page.locator('#account-label');
  }

  async open() {
    await this.page.goto('#/login');
    await expect(this.loginButton).toBeVisible();
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }
}