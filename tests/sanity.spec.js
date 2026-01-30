import { test, expect } from '@playwright/test';

test('@sanity GET /posts - api is reachable (sanity)', async ({ request }) => {
  const response = await request.get('/posts');

  expect(response.status()).toBe(200);
});
