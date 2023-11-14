const HttpError = require('./http-error');

module.exports = function badRequest({
  error = 'Bad request',
  message = 'There was a problem with your input.',
  detail,
} = {}) {

  return new HttpError({
    statusCode: 400,
    error,
    message,
    isOperational: true,
    detail,
  });
};

