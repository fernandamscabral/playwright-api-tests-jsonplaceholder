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

test('GET /posts/1 should return a single post', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body).toHaveProperty('userId');
  expect(body).toHaveProperty('title');
  expect(body).toHaveProperty('body');
});

test('GET /posts/9999 should return empty response', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/9999'
  );

  expect(response.status()).toBe(404);

  const body = await response.json();
  expect(body).toEqual({});
});
