module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  rules: {
    complexity: ['warn', 10],
    semi: ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'generator-star-spacing': ['error', { before: true, after: true }],
    'max-len': ['warn', {
      code: 80,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'max-nested-callbacks': ['warn', 3],
    'no-confusing-arrow': 'off',
    'no-restricted-globals': ['error', 'find', 'self', 'event'],
    'operator-linebreak': ['error', 'before', {
      overrides: {
        '=': 'after',
      },
    }],
  },
}
