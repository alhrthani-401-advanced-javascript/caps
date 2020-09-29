/* eslint-disable no-undef */

const havdleDataWithinVendor = require('../vendor.js');

jest.spyOn(global.console, 'log');

describe('Vendor Module', () => {
  it('Test havdleDataWithinVendor()', () => {
    const buffer = Buffer.from(JSON.stringify({ topic: 'delivered', payload: { orderId: 1 } }), 'utf-8');
    havdleDataWithinVendor(buffer);
    setTimeout(() => {
      expect(console.log).toHaveBeenCalled();
    }, 1000);
  });
});