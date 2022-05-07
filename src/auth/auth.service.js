const { compareSync, compare } = require('bcrypt');
const { InvalidFields, InvalidCredentials } = require('../errors');

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
};
