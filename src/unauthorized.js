const HttpError = require('./http-error');

module.exports = function unauthorized({
  error = 'Unauthorized',
  message = 'Your credentials are invalid.',
  detail,
} = {}) {

  return new HttpError({
    statusCode: 401,
    error,
    message,
    isOperational: true,
    detail,
  });
};
