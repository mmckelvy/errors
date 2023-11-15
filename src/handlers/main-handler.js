const { HttpError } = require('../http');

module.exports = function handleError({ logger, err, req, res }) {
  // Handle programmer errors (e.g. "typeof 'foo' is undefined")
  if (!err.isOperational) {
    logger.log({
      level: 'error',
      message: err.message,
      statusCode: null,
      error: err.error,
      stack: err.stack,
      isOperational: false,
      detail: 'Programmer error',
      request: {
        hostname: req.hostname,
        url: req.originalUrl,
        method: req.method,
        body: req.body,
        query: req.query,
        user: req.user
      },
    });

    // Create a 500 error to send to the client
    const internalError = new HttpError();

    res.status(internalError.statusCode).json({
      error: internalError.error,
      message: internalError.message
    });

    // Crash the server to limit the damage associated with the programmer
    // error.
    process.exit(1);

  } else {
    logger.log({
      level: 'error',
      message: err.message,
      statusCode: err.statusCode,
      error: err.error,
      stack: err.stack,
      isOperational: err.isOperational,
      detail: err.detail,
      request: {
        hostname: req.hostname,
        url: req.originalUrl,
        method: req.method,
        body: req.body,
        query: req.query,
        user: req.user
      },
    });

    res.status(err.statusCode).json({
      error: err.error,
      message: err.message
    });
  }
};
