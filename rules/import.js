module.exports = {
  plugins: ['import'],

  rules: {
    'import/first': 'error',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      peerDependencies: true,
      optionalDependencies: true,
    }],
    'import/prefer-default-export': 'off',
  },
}
