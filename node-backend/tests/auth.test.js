const supertest = require('supertest');
const app = require('../app');

describe('Auth API', () => {
  it('should login successfully', async () => {
    const response = await supertest(app)
      .post('/login')
      .send({ email: 'user@example.com', password: 'password' });
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it('should register successfully', async () => {
    const response = await supertest(app)
      .post('/register')
      .send({ email: 'user@example.com', password: 'password' });
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});