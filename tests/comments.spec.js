import { test, expect } from '@playwright/test';

test('GET /comments?postId=1 - returns comments for given post', async ({ request }) => {
    
  const response = await request.get('/comments', {
    params: { 
        postId: '1' 
    },
  });

  expect(response.status()).toBe(200);
  
  const body = await response.json();
  
  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);

  for (const comment of body) {
    expect(comment.postId).toBe(1);
  }
});

test('GET /comments - returns comments with expected structure', async ({ request }) => {
  const response = await request.get('/comments');
  const body = await response.json();

  const comment = body[0];

  expect(comment).toHaveProperty('postId');
  expect(comment).toHaveProperty('id');
  expect(comment).toHaveProperty('name');
  expect(comment).toHaveProperty('email');
  expect(comment).toHaveProperty('body');
});

test ('GET /comments with invalid postId returns empty array', async ({ request }) => {
   const response = await request.get('/comments?postId=abc');

   expect(response.status()).toBe(200);

   const body = await response.json();
   expect(Array.isArray(body)).toBe(true);
   expect(body.length).toBe(0);
});

