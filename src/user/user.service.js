const User = require('./user.entity');

module.exports = class UserService {
  static searchByEmail(email) {
    return User.searchBy('email', email);
  }
};
