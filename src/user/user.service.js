const Parse = require('parse/node');
const User = require('./user.entity');

module.exports = class UserService {
  static searchByEmail(email, next) {
    try {
      return User.searchBy('email', email);
    }
    catch (error) {
      next(error);
    }
  }
};
