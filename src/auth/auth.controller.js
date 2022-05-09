const jwt = require('jsonwebtoken');
const User = require('../user/user.entity');
const UserService = require('../user/user.service');
const AuthService = require('./auth.service');
const { UserNotFound } = require('../errors');

module.exports = class AuthController {
  static async signup(req, res, next) {
    try {
      const { email, password } = req.body;
      AuthService.validateBody(email, password);
      const user = await User.saveOnDb({ email, password });
      return res.status(201)
        .json({ message: 'User criado com sucesso', user });
    }
    catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      AuthService.validateBody(email, password);
      const user = await UserService.searchByEmail(email);
      if (!user) {
        throw new UserNotFound();
      }
      AuthService.validatePassword(user.get('password'), password);
      const token = jwt.sign(user.id, process.env.JWT_SECRET);
      return res.status(201).json({ accessToken: token });
    }
    catch (error) {
      next(error);
    }
  }
};
