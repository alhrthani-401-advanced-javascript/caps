/* eslint-disable no-use-before-define, no-unused-expressions */

const deliveredHandler = (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
};

module.exports.deliveredHandler = deliveredHandler;