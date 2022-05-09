const Movie = require('./movies.entity');
const MoviesService = require('./movies.service');

module.exports = class MoviesController {
  static async postMovie(req, res, next) {
    try {
      MoviesService.validateBodyPost({ ...req.body });
      const movieSaved = await Movie.saveOnDb({ ...req.body, userId: req.userId });
      return res.status(201).json({ message: 'Filme salvo com sucesso!', movie: movieSaved });
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

  static async patchMovie(req, res, next) {
    try {
      MoviesService.validateBodyPatch({ ...req.body });
      const {
        title, description, imageLink, launchDate
      } = req.body;
      await Movie.patchMovie(req.params.id, {
        title, description, imageLink, launchDate
      });

      return res.status(204).end();
    }
    catch (error) {
      next(error);
    }
  }

  static async getByTitleLaunchDate(req, res, next) {
    try {
      MoviesService.validateParamsSearchNameDate({ ...req.params });
      const { launchDate, title } = req.params;
      const moviesByDate = await MoviesService.findByDate(launchDate);
      const moviesByTitle = await MoviesService.findByTitle(title);
      const moviesFound = [...moviesByDate, ...moviesByTitle];
      return res.status(200).json({ moviesFound: moviesFound.length, data: moviesFound });
    }
    catch (error) {
      next(error);
    }
  }
};
