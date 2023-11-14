# Errors
A collection of HTTP errors for use with Node / Express.

## Usage
Handle an error in a route handler.

```javascript
const { notFound } = require('@mmckelvy/errors');


async function getUser(req, res, next) {
  try {
    const user = await services.selectUser({userId});

    if (!user) {
      return next(notFound({
        message: `We couldn't find that user.`
      }));
    }

    return res.status(200).json({
      meta: {
        dataFormat: 'object'
      },
      data: user
    });

  } catch (err) {
    next(err);
  }
}

```

## Base HTTP Error Class

```javascript
module.exports = class HttpError extends Error {
  constructor({
    // Client facing props
    statusCode = 500,
    error = 'Internal server error',
    message = 'Something went wrong. Try again later.',

    // Private props (not to be shared with client)
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

```
