module.exports = {
  plugins: ['import'],

  rules: {
    'import/first': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      peerDependencies: true,
      optionalDependencies: true,
    }],
  },
}
