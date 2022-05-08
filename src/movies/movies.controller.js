const User = require('../user/user.entity');
const Movie = require('./movies.entity');

module.exports = class MoviesController {
  static async postMovie(req, res, next) {
    try {
      const movieSaved = await Movie.saveOnDb({ ...req.body, userId: req.userId });
      return res.status(201).json(movieSaved);
    }
    catch (error) {
      next(error);
    }
  }

  static async getMovies(req, res, next) {
    try {
      const movies = await Movie.getAll();
      return res.status(200).json({ moviesFound: movies.length, data: movies });
    }
    catch (error) {
      next(error);
    }
  }
};
