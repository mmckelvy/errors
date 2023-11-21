// HTTP
const badRequest = require('./bad-request');
const HttpError = require('./http-error');
const notFound = require('./not-found');
const serviceUnavailable = require('./service-unavailable');
const unauthorized = require('./unauthorized');
// PG
const pgErrors = require('./pg-errors');

module.exports = {
  badRequest,
  HttpError,
  notFound,
  serviceUnavailable,
  unauthorized,
  pgErrors
};
