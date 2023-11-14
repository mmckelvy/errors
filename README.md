# Errors
A collection of HTTP errors for use with Node / Express.

## Usage
Handle an error in a route handler.

```javascript
const { notFound } = require('../../errors');


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

## API


