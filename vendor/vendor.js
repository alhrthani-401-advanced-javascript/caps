'use strict';

// to have some inputs from the user, 
// from the terminal

// get the user input from terminal
// const inquirer = require('inquirer');
const Order = require('./models/order.js');


const net = require('net');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const client = new net.Socket();

client.connect(port, host, () => {
  console.log('Vendor is connected to Server! ..');
});

client.on('data', function(data) {
  console.log('vendor received data');
  let event = JSON.parse(data);
  console.log(event);


});

function newOrder() {
  const order = new Order();
  order['event'] = 'newOrder';
  console.log('order>>>>>', order);
  let event = JSON.stringify(order);
  console.log('event>>>>>', event);


  client.write(event);
}
setInterval(newOrder, 5000);








// 'use strict';


// const events = require('./events');
// const Order = require('./models/order');



// const deliveredHandler = (payload) => {
//   console.log(`
//     EVENT { event: 'delivered',
//       time: ${new Date().toISOString()},
//       payload:
//        { store: ${payload.storeName},
//          orderID: ${payload.orderId},
//          customer: ${payload.customerName},
//          address: ${payload.address} } }`);
//   console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
// };

// events.on('delivered', deliveredHandler);

// module.exports = deliveredHandler;