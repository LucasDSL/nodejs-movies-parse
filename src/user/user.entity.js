const Parse = require('parse/node');
const { hashSync } = require('bcrypt');

class User extends Parse.Object {
  constructor() {
    super('User');
  }

  static saveOnDb({ email, password }) {
    const user = new User();
    user.set('password', hashSync(password, 8));
    user.set('email', email);
    return user.save();
  }

  static searchBy(field, equal) {
    const query = new Parse.Query(User);
    query.equalTo(field, equal);
    return query.first();
  }
}

Parse.Object.registerSubclass('User', User);

module.exports = User;
