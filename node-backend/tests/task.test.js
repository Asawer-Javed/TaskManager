const supertest = require('supertest');
const app = require('../app');

describe('Task API', () => {
  it('should get all tasks', async () => {
    const response = await supertest(app)
      .get('/tasks')
      .set('Authorization', 'Bearer YOUR_TOKEN');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should create a new task', async () => {
    const response = await supertest(app)
      .post('/tasks')
      .set('Authorization', 'Bearer YOUR_TOKEN')
      .send({ title: 'New Task', description: 'This is a new task', categoryId: 'CATEGORY_ID' });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('title', 'New Task');
  });

  // Add more test cases for updating and deleting tasks
});