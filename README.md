# Errors
A collection of errors for use with Node / Express.

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

## PostgreSQL errors

```javascript
module.exports = {
  uniqueViolation(err) {
    return err.code && err.code === '23505';
  },
  checkViolation(err) {
    return err.code && err.code === '23514';
  },
  invalidDate(err) {
    return err.code && (err.code === '22008' || '22007');
  },
  syntaxError(err) {
    return err.code && err.code === '42601';
  },
  restrictViolation(err) {
    return err.code && err.code === '23001';
  },
  foreignKeyViolation(err) {
    return err.code && err.code === '23503';
  },
  notNullViolation(err) {
    return err.code && err.code === '23502';
  },
  dataException(err) {
    return err.code && /^22.+$/.test(err.code);
  },
  undefinedColumn(err) {
    return err.code && err.code === '42703';
  },
};
```
