import { test, expect } from '../../fixtures/test.fixture';
import { users } from '../../test-data/users';

test('User can login successfully', async ({ loginPage, inventoryPage }) => {
  await loginPage.open();

  await loginPage.login(
    users.valid.username,
    users.valid.password
  );

  await expect(inventoryPage.inventoryContainer).toBeVisible();
});

for (const user of users.invalid) {
  test(`User cannot login - ${user.name}`, async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login(
      user.username,
      user.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
  });
}

test('User can logout successfully', async ({ loginPage }) => {
  await loginPage.open();

  await loginPage.login(
    users.valid.username,
    users.valid.password
  );

  await loginPage.logout();

  await expect(loginPage.loginButton).toBeVisible();
});
