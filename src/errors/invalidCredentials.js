module.exports = class InvalidCredentials extends Error {
  constructor() {
    super('Email ou senha incorretos!');
    this.errId = 3;
    this.name = 'InvalidCredentials';
  }
};
