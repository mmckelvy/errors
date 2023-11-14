const HttpError = require('./http-error');

module.exports = function notFound({
  error = 'Not found',
  message = 'The resource you requested does not exist.',
  detail,
} = {}) {

  return new HttpError({
    statusCode: 404,
    error,
    message,
    isOperational: true,
    detail,
  });
};

