import { test, expect } from '@playwright/test';

test('GET /users - returns a list of users', async ({ request }) => {
  const response = await request.get('/users');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);
});

test('GET /users - returns users with expected structure', async ({ request }) => {
  const response = await request.get('/users');

  expect(response.status()).toBe(200);
  
  const body = await response.json();

  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);

  const user = body[0];

  expect(user).toHaveProperty('id');
  expect(user).toHaveProperty('name');
  expect(user).toHaveProperty('username');
  expect(user).toHaveProperty('email');

  expect(user).toHaveProperty('address');
  expect(user.address).toHaveProperty('street');
  expect(user.address).toHaveProperty('city');
  expect(user.address).toHaveProperty('zipcode');

  expect(user.address).toHaveProperty('geo');
  expect(user.address.geo).toHaveProperty('lat');
  expect(user.address.geo).toHaveProperty('lng');

  expect(user).toHaveProperty('company');
  expect(user.company).toHaveProperty('name');

  expect(typeof user.id).toBe('number');
  expect(typeof user.name).toBe('string');
  expect(typeof user.username).toBe('string');
  expect(typeof user.email).toBe('string');

  expect(typeof user.address).toBe('object');
  expect(typeof user.address.street).toBe('string');
  expect(typeof user.address.city).toBe('string');
  expect(typeof user.address.zipcode).toBe('string');

  expect(typeof user.address.geo).toBe('object');
  expect(typeof user.address.geo.lat).toBe('string');
  expect(typeof user.address.geo.lng).toBe('string');

  expect(typeof user.company).toBe('object');
  expect(typeof user.company.name).toBe('string');
});
