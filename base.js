module.exports = {
  parser: 'babel-eslint',
  extends: [ 'airbnb-base' ],
  rules: {
    complexity: [ 'warn', 6 ],
    semi: [ 'error', 'never' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'generator-star-spacing': [ 'error', { before: true, after: true } ],
    'max-len': [ 'warn', {
      code: 80,
      ignoreComments: true,
      ignorePattern: '\\`[\\s\\S]*\\`',
    } ],
    'max-nested-callbacks': [ 'warn', 5 ],
    'no-confusing-arrow': [ 'error', { allowParens: true } ],
    'no-restricted-globals': [ 'error', 'find', 'self', 'event' ],
    'operator-linebreak': [ 'error', 'before', {
      overrides: {
        '=': 'after',
      },
    } ],
  },
}
