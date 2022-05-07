module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'brace-style': [
      'error',
      'stroustrup'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-unused-vars': [
      'warn'
    ]
  }
};
