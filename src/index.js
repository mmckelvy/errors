const badRequest = require('./bad-request');
const unauthorized = require('./unauthorized');
const notFound = require('./not-found');
const serviceUnavailable = require('./service-unavailable');

module.exports = {
  badRequest,
  unauthorized,
  notFound,
  serviceUnavailable
};
