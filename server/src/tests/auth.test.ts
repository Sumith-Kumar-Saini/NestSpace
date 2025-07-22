/// <reference types="jest" />
import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI!);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('Auth Routes', () => {
  it('should register a user', async () => {
    const res = await request(app).post('/api/auth/signup').send({
      email: 'test@example.com',
      password: 'test1234',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should login a user', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'test@example.com',
      password: 'test1234',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should block access to /api/products without token', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(401);
  });
});
