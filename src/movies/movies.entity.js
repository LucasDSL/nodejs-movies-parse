const Parse = require('parse/node');
const { MovieNotFound } = require('../errors');

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
    movie.set('launchDate', launchDate);
    movie.set('postedBy', userId);
    return movie.save();
  }

  static getAll() {
    const query = new Parse.Query(Movie);
    return query.findAll();
  }

  static findById(id) {
    const query = new Parse.Query(Movie);
    return query.get(id);
  }

  static async patchMovie(id, fieldsToUpdate) {
    const movie = await this.findById(id);
    if (!movie) {
      throw new MovieNotFound();
    }
    Object.keys(fieldsToUpdate).forEach((field) => {
      if (fieldsToUpdate[field]) {
        movie.set(field, fieldsToUpdate[field]);
      }
    });
    return movie.save();
  }

  static searchBy(field, equalTo) {
    const query = new Parse.Query(Movie);
    query.equalTo(field, equalTo);
    return query.findAll();
  }
}

Parse.Object.registerSubclass('Movie', Movie);

module.exports = Movie;
