module.exports = class InvalidToken extends Error {
  constructor() {
    super('Token inválido ou autorização negada!');
    this.errId = 3;
    this.name = 'InvalidToken';
  }
};
