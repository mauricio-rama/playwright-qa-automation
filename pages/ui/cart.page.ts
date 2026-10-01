import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItem = page
      .locator('[data-test="inventory-item"]')
      .filter({ hasText: 'Sauce Labs Backpack' });
  }

  async open() {
    await this.page.goto('/cart.html');
  }
}