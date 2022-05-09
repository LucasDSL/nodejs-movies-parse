const {
  InvalidFields,
  UserNotFound,
  InvalidCredentials,
  InvalidToken,
  MovieNotFound,
  InvalidFieldsMovies

} = require('../errors');
const InvalidFieldsSearchMovies = require('../errors/invalidFieldsSearchMovie');

const errorHandler = (err, req, res, next) => {
  let status = 500;
  if (err instanceof InvalidFields
    || err instanceof InvalidCredentials
    || err instanceof InvalidFieldsMovies
    || err instanceof InvalidFieldsSearchMovies) {
    status = 400;
  }
  if (err instanceof UserNotFound || err instanceof MovieNotFound) {
    status = 404;
  }

  if (err instanceof InvalidToken) {
    status = 401;
  }

  return res.status(status)
    .json({
      name: err.name,
      message: err.message,
      errorId: err.errId
    });
};

module.exports = errorHandler;
