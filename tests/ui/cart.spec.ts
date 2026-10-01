import { test, expect } from '../../fixtures/test.fixture';
import { users } from '../../test-data/users';

test('User can add backpack to cart', async ({ loginPage, inventoryPage, cartPage }) => {
  await loginPage.open();

  await loginPage.login(
    users.valid.username,
    users.valid.password
  );

  await inventoryPage.addBackpackToCart();

  await expect(inventoryPage.cartBadge).toHaveText('1');

  await cartPage.open();

  await expect(cartPage.cartItem).toBeVisible();
});

test('User can remove backpack from cart', async ({
  loginPage,
  inventoryPage,
}) => {
  await loginPage.open();

  await loginPage.login(
    users.valid.username,
    users.valid.password
  );

  await inventoryPage.addBackpackToCart();

  await expect(inventoryPage.cartBadge).toHaveText('1');

  await inventoryPage.removeBackpackFromCart();

  await expect(inventoryPage.cartBadge).not.toBeVisible();
});