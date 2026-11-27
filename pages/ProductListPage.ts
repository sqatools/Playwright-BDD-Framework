import { Page, Locator, expect } from '@playwright/test';

export class ProductListPage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly listingTitle: Locator;
  readonly resultCount: Locator;
  readonly productNames: Locator;
  readonly noResults: Locator;
  readonly cartCount: Locator;
  readonly cartLink: Locator;

  constructor(private readonly page: Page) {
    this.searchInput = page.getByTestId('search-input');
    this.searchButton = page.getByTestId('search-button');
    this.listingTitle = page.getByTestId('listing-title');
    this.resultCount = page.getByTestId('result-count');
    this.productNames = page.getByTestId('product-name');
    this.noResults = page.getByTestId('no-results');
    this.cartCount = page.getByTestId('cart-count');
    this.cartLink = page.getByTestId('cart-link');
  }

  async open() {
    await this.page.goto('');
    await expect(this.productNames.first()).toBeVisible();
  }

  async search(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  /** Clicks "Add to cart" on the card whose product name matches exactly. */
  async addToCart(productName: string) {
    const card = this.page
      .getByTestId('product-card')
      .filter({ has: this.page.getByTestId('product-name').getByText(productName, { exact: true }) });
    await card.getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}