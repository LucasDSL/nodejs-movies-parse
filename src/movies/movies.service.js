const { InvalidFieldsMovies, InvalidFieldsSearchMovies } = require('../errors');
const Movie = require('./movies.entity');

module.exports = class MoviesService {
  static validateBodyPost({
    title, description, imageLink, launchDate
  }) {
    if (!title || !description || !imageLink || !launchDate) {
      throw new InvalidFieldsMovies();
    }
  }

  static validateBodyPatch({
    title, description, imageLink, launchDate
  }) {
    if (!title && !description && !imageLink && !launchDate) {
      throw new InvalidFieldsMovies();
    }
  }

  static validateParamsSearchNameDate({ title, launchDate }) {
    if (!title || !launchDate) {
      throw new InvalidFieldsSearchMovies();
    }
  }

  static findByDate(date) {
    return Movie.searchBy('launchDate', date);
  }

  static findByTitle(title) {
    return Movie.searchBy('title', title);
  }
};
