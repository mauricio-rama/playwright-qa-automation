import { test, expect } from '@playwright/test';
import { UsersApi } from '../../pages/api/users.api';

test('GET users returns a successful response', async ({ request }) => {
  const usersApi = new UsersApi(request);

  const response = await usersApi.getUsers();

  expect(response.status()).toBe(200);

  const users = await response.json();

  expect(users[0]).toHaveProperty('id');
  expect(users[0]).toHaveProperty('name');
  expect(users[0]).toHaveProperty('email');
});