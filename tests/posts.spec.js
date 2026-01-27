const { test, expect } = require('@playwright/test');

test('GET /posts should return a list of posts', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);

  expect(body[0]).toHaveProperty('userId');
  expect(body[0]).toHaveProperty('id');
  expect(body[0]).toHaveProperty('title');
  expect(body[0]).toHaveProperty('body');
});
