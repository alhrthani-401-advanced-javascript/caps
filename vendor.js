'use strict';


const events = require('./events');
const Order = require('./models/order');

function newOrder() {
  const order = new Order();
  events.emit('pickup', order);
}
setInterval(newOrder, 5000);

const deliveredHandler = (payload) => {
  console.log(`
    EVENT { event: 'delivered',
      time: ${new Date().toISOString()},
      payload:
       { store: ${payload.storeName},
         orderID: ${payload.orderId},
         customer: ${payload.customerName},
         address: ${payload.address} } }`);
  console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
};

events.on('delivered', deliveredHandler);

module.exports = deliveredHandler;