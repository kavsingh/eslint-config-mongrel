module.exports = {
  plugins: ['lodash-fp'],
  extends: [
    'plugin:lodash-fp/recommended',
  ],
  rules: {
    'lodash-fp/consistent-compose': ['error', 'pipe'],
  },
};
