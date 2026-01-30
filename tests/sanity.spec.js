import { test, expect } from '@playwright/test';

test('GET /posts - api is reachable (sanity)', async ({ request }) => {
  const response = await request.get('/posts');
  
  expect(response.status()).toBe(200);
});
