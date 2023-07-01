const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const Item = require('../src/models/Item');

describe('Dropshipping Calculator API', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/dropshipping_calculator', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Item.deleteMany({});
  });

  afterAll(async () => {
    await Item.deleteMany({});
    await mongoose.disconnect();
  });

  it('should calculate profit and expenses for an item', async () => {
    const itemData = {
      costPrice: 10,
      sellingPrice: 20,
      taxRate: 0.2,
      shippingCost: 5,
    };
    const response = await request(app)
      .post('/calculate')
      .send(itemData);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.newItem).toBeDefined();

    const newItem = response.body.newItem;
    expect(newItem.profit).toBe(5);
    expect(newItem.expenses).toBe(7);
  });
});

    
   it('should return an error for missing required fields', async () => {
    const itemData = {}; // Empty item data

    const response = await request(app)
      .post('/calculate')
      .send(itemData);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Missing required fields');
  });

  it('should return an error for invalid data types', async () => {
    const itemData = {
      costPrice: '10', // Invalid data type (should be a number)
      sellingPrice: 20,
      taxRate: 0.2,
      shippingCost: '5', // Invalid data type (should be a number)
    };

    const response = await request(app)
      .post('/calculate')
      .send(itemData);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid data types');
  });

  it('should handle decimal values correctly', async () => {
    const itemData = {
      costPrice: 10.5, // Decimal cost price
      sellingPrice: 20.75, // Decimal selling price
      taxRate: 0.15, // Decimal tax rate
      shippingCost: 5.25, // Decimal shipping cost
    };

    const response = await request(app)
      .post('/calculate')
      .send(itemData);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);

    const newItem = response.body.newItem;
    expect(newItem.profit).toBeCloseTo(9.08, 2); // Close approximation with 2 decimal places
    expect(newItem.expenses).toBeCloseTo(6.38, 2);
  });

  it('should handle zero values correctly', async () => {
    const itemData = {
      costPrice: 0,
      sellingPrice: 0,
      taxRate: 0,
      shippingCost: 0,
    };

    const response = await request(app)
      .post('/calculate')
      .send(itemData);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);

    const newItem = response.body.newItem;
    expect(newItem.profit).toBe(0);
    expect(newItem.expenses).toBe(0);
  });
});
