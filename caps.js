'use strict';

const events = require('./events');

events.on('pickup', (payload) => {
  console.log(`
  EVENT { event: 'pickup',
    time: ${new Date().toISOString()},
    payload:
     { store: ${payload.storeName},
       orderID: ${payload.orderId},
       customer: ${payload.customerName},
       address: ${payload.address} } }`);
});

events.on('in-transit', (payload) => {
  console.log(`
  EVENT { event: 'in-transit',
    time: ${new Date().toISOString()},
    payload:
     { store: ${payload.storeName},
       orderID: ${payload.orderId},
       customer: ${payload.customerName},
       address: ${payload.address} } }`);
});