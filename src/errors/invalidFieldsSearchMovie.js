module.exports = class InvalidFieldsSearchMovies extends Error {
  constructor() {
    const message = `
    Todos os campos precisam ser preenchidos:
    Campos: ['title', 'launchDate(dd-mm-yyyy)']`;
    super(message);
    this.name = 'InvalidFieldsSearchMovies';
    this.errId = 7;
  }
};
