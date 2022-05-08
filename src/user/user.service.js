const User = require('./user.entity');

module.exports = class UserService {
  static searchByEmail(email, next) {
    return User.searchBy('email', email);
  }
};
