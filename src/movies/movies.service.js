const InvalidFieldsMovies = require('../errors');

module.exports = class MoviesService {
  static validateBodyPatch({
    title, description, imageLink, launchDate
  }) {
    if (!title && !description && !imageLink && !launchDate) {
      throw new InvalidFieldsMovies();
    }
  }
};
