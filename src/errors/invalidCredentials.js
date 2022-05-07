module.exports = class InvalidCredentials extends Error {
  constructor() {
    super('Usuário com email fornecido não encontrado!');
    this.errId = 3;
    this.name = 'InvalidCredentials';
  }
};
