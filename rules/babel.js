module.exports = {
  plugins: ['babel'],
  rules: {
    'new-cap': 'off',
    'babel/new-cap': ['error', { newIsCap: true, capIsNew: false }],

    'object-curly-spacing': 'off',
    'babel/object-curly-spacing': ['error', 'always'],

    'no-await-in-loop': 'off',
    'babel/no-await-in-loop': 'error',

    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error'
  },
};
