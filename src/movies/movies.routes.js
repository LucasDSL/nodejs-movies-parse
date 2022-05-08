const { Router } = require('express');
const MoviesController = require('./movies.controller');
const AuthService = require('../auth/auth.service');

const router = Router();

router.post('/', AuthService.authenticateToken, MoviesController.postMovie);
router.get('/', AuthService.authenticateToken, MoviesController.getMovies);

module.exports = router;
