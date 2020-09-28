'use strict';

const events = require('./events');

const pickupHandler = (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderId}`);
    events.emit('in-transit', payload);
  }, 2000);

  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderId}`);
    events.emit('delivered', payload);
  }, 4000);
};

events.on('pickup', pickupHandler);

module.exports = pickupHandler;