const faker = require('faker');

// const storeName = process.env.VENDOR_NAME;

class Order {
  constructor() {
    this.storeName = 'vendor1';
    this.orderId = faker.random.uuid();
    this.customerName = faker.name.findName();
    this.address = faker.address.country();
  }
}

module.exports = Order;