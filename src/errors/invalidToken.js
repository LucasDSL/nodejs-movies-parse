module.exports = class InvalidToken extends Error {
  constructor() {
    super('Token inválido ou autorização negada!');
    this.errId = 4;
    this.name = 'InvalidToken';
  }
};
