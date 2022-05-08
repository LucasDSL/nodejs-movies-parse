module.exports = class InvalidFields extends Error {
  constructor() {
    const message = 'Email e password são campos obrigatórios e devem ser do tipo string!';
    super(message);
    this.name = 'InvalidFieldsOnSignup';
    this.errId = 1;
  }
};
