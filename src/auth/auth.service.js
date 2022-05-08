const { compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const { InvalidFields, InvalidCredentials, InvalidToken } = require('../errors');

module.exports = class AuthService {
  static validateBody(email = undefined, password = undefined) {
    if (!email || !password || typeof (email) !== 'string' || typeof (password) !== 'string') {
      throw new InvalidFields();
    }
  }

  static validatePassword(hash, passwordText) {
    if (!compareSync(passwordText, hash)) {
      throw new InvalidCredentials();
    }
  }

  static authenticateToken(req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) {
        throw new InvalidToken();
      }
      jwt.verify(token, process.env.JWT_SECRET, (err, userId) => {
        if (err) throw new InvalidToken();
        req.userId = userId;
        next();
      });
    }
    catch (error) {
      next(error);
    }
  }
};
