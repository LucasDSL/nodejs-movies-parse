const InvalidFieldsMovies = require('../errors');
const InvalidFieldsSearchMovies = require('../errors/invalidFieldsSearchMovie');
const Movie = require('./movies.entity');

module.exports = class MoviesService {
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
