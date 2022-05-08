const Parse = require('parse/node');

class Movie extends Parse.Object {
  constructor() {
    super('Movie');
  }

  static saveOnDb({
    title, description, imageLink, launchDate, userId
  }) {
    const movie = new Movie();
    movie.set('title', title);
    movie.set('description', description);
    movie.set('imageLink', imageLink);
    movie.set('lauchDate', launchDate);
    movie.set('postedBy', userId);
    return movie.save();
  }

  static getAll() {
    const query = new Parse.Query(Movie);
    return query.findAll();
  }
}

Parse.Object.registerSubclass('Movie', Movie);

module.exports = Movie;
