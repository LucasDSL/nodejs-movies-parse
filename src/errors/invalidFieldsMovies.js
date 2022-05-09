module.exports = class InvalidFieldsMovies extends Error {
  constructor() {
    const message = `
    Todos os campos precisam ser preenchidos:
    Campos: ['title', 'description', 'imageLink', 'launchDate(dd-mm-yyyy)']`;
    super(message);
    this.name = 'InvalidFieldsMovies';
    this.errId = 5;
  }
};
