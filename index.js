module.exports = {
  extends: [
    './base',
    './rules/babel',
    './rules/import',
    './rules/react',
    './rules/lodashFp',
  ].map(require.resolve),
};
