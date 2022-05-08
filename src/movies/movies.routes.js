const { Router } = require('express');
const MoviesController = require('./movies.controller');
const AuthService = require('../auth/auth.service');

const router = Router();

router.all('/', AuthService.authenticateToken);
router.post('/', MoviesController.postMovie);
router.get('/', MoviesController.getMovies);
router.patch('/:id', MoviesController.patchMovie);

module.exports = router;
