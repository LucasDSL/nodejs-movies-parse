module.exports = class MoviesController {
  static postMovie(req, res, next) {
    return res.json({ userId: req.userId });
  }
};
