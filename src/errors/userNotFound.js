module.exports = class UserNotFound extends Error {
  constructor() {
    super('Usuário com email fornecido não encontrado!');
    this.errId = 2;
    this.name = 'UserNotFound';
  }
};
