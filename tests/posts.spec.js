const { test, expect } = require('@playwright/test');

test('GET /posts - returns a list of posts', async ({ request }) => {
  const response = await request.get('/posts');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);

  expect(body[0]).toHaveProperty('userId');
  expect(body[0]).toHaveProperty('id');
  expect(body[0]).toHaveProperty('title');
  expect(body[0]).toHaveProperty('body');

  expect(typeof body[0].userId).toBe('number');
  expect(typeof body[0].id).toBe('number');
  expect(typeof body[0].title).toBe('string');
  expect(typeof body[0].body).toBe('string');
});

test('GET /posts/:id - existing id returns a post', async ({ request }) => {
  const response = await request.get('/posts/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(Array.isArray(body)).toBe(false);

  expect(body.id).toBe(1);
  expect(body).toHaveProperty('userId');
  expect(body).toHaveProperty('title');
  expect(body).toHaveProperty('body');

  expect(typeof body.userId).toBe('number');
  expect(typeof body.title).toBe('string');
  expect(typeof body.body).toBe('string');
});

test('GET /posts/:id - returns 404 for non-existing id', async ({ request }) => {
  const response = await request.get('/posts/9999');

  expect(response.status()).toBe(404);
});

test('GET /posts/:id - returns client error for non-numeric id', async ({ request }) => {
  const response = await request.get('/posts/abc');

  expect([400, 404]).toContain(response.status());
});

test('GET /posts?userId=1 - returns posts filtered by userId', async ({ request }) => {
    const response = await request.get('/posts', {
      params: { userId: 1 },
    });

  expect(response.status()).toBe(200);  

  const body = await response.json();

  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);

  for (const post of body) {
    expect(post.userId).toBe(1);
  } 
});

test('POST /posts - create post (simulated)', async ({ request }) => {
  const payload = {
    userId: 1,
    title: 'Test Post',
    body: 'This is a test post.',
  };

  const response = await request.post('/posts', {
    data: payload,
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body).toHaveProperty('id');
  expect(typeof body.id).toBe('number');

  expect(body.userId).toBe(payload.userId);
  expect(body.title).toBe(payload.title);
  expect(body.body).toBe(payload.body);
});
