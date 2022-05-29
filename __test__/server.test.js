'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('API Server', () => {
  test('getting data from home route /', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello World!');
  });
  test('getting data from data route /data', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
  });
  test('getting data from test route /test', async () => {
    const response = await request.get('/test');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
  });
  test('handle not found request', async () => {
    const response = await request.get('/abc');
    expect(response.status).toEqual(404);
  });
  test('handle server error', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
});
