'use strice';

const handleDataWithinDriver = require('../driver');

jest.spyOn(global.console, 'log');

describe('Driver Module', () => {
  it('test handleDataWithinDriver()', () => {
    const buffer = Buffer.from(JSON.stringify({ topic: 'pickup', payload: { orderId: 1 } }), 'utf-8');
    handleDataWithinDriver(buffer);
    setTimeout(() => {
      expect(console.log).toHaveBeenCalled();
    }, 1000);
  });
});