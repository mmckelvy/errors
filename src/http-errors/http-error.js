module.exports = class HttpError extends Error {
  constructor({
    // Client facing props
    statusCode = 500,
    error = 'Internal server error',
    message = 'Something went wrong. Try again later.',
    
    // Private props (not shared with client)
    isOperational = false,
    detail = {}
  } = {}) {
    super();

    this.statusCode = statusCode;
    this.error = error;
    this.message = message;
    
    this.isOperational = isOperational;
    this.detail = detail;
  }
};
