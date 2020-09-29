'use strict';

// to have some inputs from the user, 
// from the terminal

// get the user input from terminal
// const inquirer = require('inquirer');
// const Order = require('./models/order');


const net = require('net');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const client = new net.Socket();

client.connect(port, host, () => {
  console.log('Driver is connected to Server! ..');
});

client.on('data', function(data) {
  console.log('driver received data');
  let receivedOrderWithEvent = JSON.parse(data);
  console.log('driver received this order>>>', receivedOrderWithEvent);
  //add event to object
  console.log('After adding events to object >>>', receivedOrderWithEvent);



  setTimeout(() => {
    receivedOrderWithEvent['event'] = 'picked';

    let pickedOrderWithEvent = JSON.stringify(receivedOrderWithEvent);

    console.log(`DRIVER: picked up an order: ${pickedOrderWithEvent}`);

    client.write(pickedOrderWithEvent);
  }, 2000);

  setTimeout(() => {
    receivedOrderWithEvent['event'] = 'delivered';
    let deliveredOrderWithEvent = JSON.stringify(receivedOrderWithEvent);
    console.log(`DRIVER: delivered up ${deliveredOrderWithEvent}`);
    client.write(deliveredOrderWithEvent);
  }, 4000);






});