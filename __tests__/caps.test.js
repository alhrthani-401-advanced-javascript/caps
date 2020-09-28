'use strict';
/* eslint-disable no-undef */
const events = require('events');
const Order = require('../models/order');
const pickupHandler = require('../driver');
const deliveredHandler = require('../vendor');
const newEvents = new events();
jest.spyOn(global.console, 'log');

describe('Test caps module', () => {
  it('Testing pickup', () => {
    const order = new Order();
    newEvents.on('pickup', pickupHandler);
    newEvents.emit('pickup', order);
    setTimeout(() => {
      expect(console.log).toHaveBeenCalled();
    }, 1000);
  });

  it('Testing delivered', () => {
    const order = new Order();
    newEvents.on('delivered', deliveredHandler);
    newEvents.emit('delivered', order);
    expect(console.log).toHaveBeenCalled();
  });
});