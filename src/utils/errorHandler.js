const {
  InvalidFields,
  UserNotFound,
  InvalidCredentials
} = require('../errors');

const errorHandler = (err, req, res, next) => {
  let status = 500;
  if (err instanceof InvalidFields || err instanceof InvalidCredentials) {
    status = 400;
  }
  if (err instanceof UserNotFound) {
    status = 404;
  }

  return res.status(status)
    .json({ name: err.name, message: err.message, errorId: err.errId });
};

module.exports = errorHandler;
