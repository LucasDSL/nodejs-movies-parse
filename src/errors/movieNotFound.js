module.exports = class MovieNotFound extends Error {
  constructor() {
    super('Movie com id fornecido não encontrado!');
    this.errId = 6;
    this.name = 'MovieNotFound';
  }
};
