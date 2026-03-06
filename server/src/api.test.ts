import request from 'supertest';
import { app } from './index';

describe('API endpoints', () => {
  describe('GET /api/health', () => {
    it('returns 200 and status ok', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ status: 'ok', message: 'Seasonal Fruits API' });
    });
  });

  describe('GET /api/months', () => {
    it('returns 200 and list of 12 months', async () => {
      const res = await request(app).get('/api/months');
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body).toHaveLength(12);
      expect(res.body[0]).toEqual({ value: 1, label: 'January' });
      expect(res.body[11]).toEqual({ value: 12, label: 'December' });
    });
  });

  describe('GET /api/fruits', () => {
    it('returns 200 and fruits for valid month', async () => {
      const res = await request(app).get('/api/fruits?month=6');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('month', 6);
      expect(res.body).toHaveProperty('monthName', 'June');
      expect(res.body).toHaveProperty('fruits');
      expect(Array.isArray(res.body.fruits)).toBe(true);
      expect(res.body.fruits.length).toBeGreaterThan(0);
      const fruit = res.body.fruits[0];
      expect(fruit).toHaveProperty('id');
      expect(fruit).toHaveProperty('name');
      expect(fruit).toHaveProperty('image');
      expect(fruit).toHaveProperty('description');
    });

    it('returns 400 for invalid month (0)', async () => {
      const res = await request(app).get('/api/fruits?month=0');
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('error');
      expect(res.body.error).toMatch(/Invalid month|1 and 12/);
    });

    it('returns 400 for invalid month (13)', async () => {
      const res = await request(app).get('/api/fruits?month=13');
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('error');
    });

    it('returns 400 for non-numeric month', async () => {
      const res = await request(app).get('/api/fruits?month=abc');
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('error');
    });

    it('returns fruits with image URLs for month 1', async () => {
      const res = await request(app).get('/api/fruits?month=1');
      expect(res.status).toBe(200);
      expect(res.body.monthName).toBe('January');
      for (const fruit of res.body.fruits) {
        expect(typeof fruit.image).toBe('string');
        expect(fruit.image.length).toBeGreaterThan(0);
      }
    });
  });
});
