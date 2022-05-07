const Parse = require('parse/node');
const User = require('./user.entity');

module.exports = class UserService {
  static searchByEmail(email, next) {
    try {
      const query = new Parse.Query(User);
      query.equalTo('email', email);
      return query.first();
    }
    catch (error) {
      next(error);
    }
  }
};
