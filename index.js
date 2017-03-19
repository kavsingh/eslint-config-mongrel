module.exports = {
  extends: [
    './base',
    './rules/babel',
    './rules/import',
    './rules/lodashFp',
  ].map(require.resolve),
}
