const HttpError = require('./http-error');

module.exports = function serviceUnavailable({
  error = 'Service unavailable',
  message = 'Service unavailable.',
  detail,
} = {}) {

  return new HttpError({
    statusCode: 503,
    error,
    message,
    isOperational: true,
    detail,
  });
};

