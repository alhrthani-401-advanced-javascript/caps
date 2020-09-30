'use strict';

require('dotenv').config('.env');

const storeName = process.env.STORE_NAME;

const io = require('socket.io-client');

const Order = require('./models/order');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const socket = io(`http://${host}:${port}/caps`);

const { deliveredHandler } = require('./socketHandler');

socket.emit('join', storeName);

socket.on('connect', () => {
  console.log('Vednor is connected to Server! ..');
});

socket.on('delivered', (payLoad) => {
  deliveredHandler(payLoad);
});
socket.on('disconnect', () => {
  console.log('Vednor is disconnected');
});

setInterval(() => {
  const order = new Order();
  socket.emit('pickup', order);
}, 5000);




// to have some inputs from the user, 
// from the terminal

// get the user input from terminal
// const inquirer = require('inquirer');
// const Order = require('./models/order.js');


// const net = require('net');

// const host = process.env.HOST || 'localhost';
// const port = process.env.PORT || 4000;

// const client = new net.Socket();

// client.connect(port, host, () => {
//   console.log('Vendor is connected to Server! ..');
// });

// client.on('data', function(data) {
//   console.log('vendor received data');
//   let event = JSON.parse(data);
//   console.log(event);


// });

// function newOrder() {
//   const order = new Order();
//   order['event'] = 'newOrder';
//   console.log('order>>>>>', order);
//   let event = JSON.stringify(order);
//   console.log('event>>>>>', event);


//   client.write(event);
// }
// setInterval(newOrder, 5000);