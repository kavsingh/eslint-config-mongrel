module.exports = {
  extends: [
    './base',
    './rules/babel',
    './rules/import',
  ].map(require.resolve),
}
