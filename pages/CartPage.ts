import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly title: Locator;
  readonly itemNames: Locator;
  readonly couponInput: Locator;
  readonly applyCoupon: Locator;
  readonly couponMessage: Locator;

  constructor(private readonly page: Page) {
    this.title = page.getByTestId('cart-title');
    this.itemNames = page.getByTestId('cart-item-name');
    this.couponInput = page.getByTestId('coupon-input');
    this.applyCoupon = page.getByTestId('apply-coupon');
    this.couponMessage = page.getByTestId('coupon-message');
  }

  async applyCouponCode(code: string) {
    await this.couponInput.fill(code);
    await this.applyCoupon.click();
  }
}