const request = require('supertest');
const app = require('./server');

describe('Express server tests', () => {
  // Test the root endpoint
  describe('GET /', () => {
    it('responds with status code 200', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
    });

    it('serves the index.html file', async () => {
      const res = await request(app).get('/');
      expect(res.headers['content-type']).toContain('text/html');
    });
  });

  // Test the /instagram-photos endpoint
  describe('GET /instagram-photos', () => {
    it('responds with status code 200', async () => {
      const res = await request(app).get('/instagram-photos');
      expect(res.statusCode).toBe(200);
    });

    it('returns JSON data with Instagram photos', async () => {
      const res = await request(app).get('/instagram-photos');
      expect(res.headers['content-type']).toContain('application/json');
      expect(res.body).toBeDefined();
    });
  });
});
