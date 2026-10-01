export const users = {
  valid: {
    username: 'standard_user',
    password: 'secret_sauce',
  },

  invalid: [
    {
      name: 'Invalid username',
      username: 'invalid_user',
      password: 'wrong_password',
    },
    {
      name: 'Invalid password',
      username: 'standard_user',
      password: 'wrong_password',
    },
  ],
};