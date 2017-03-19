const test = require('tape')
const { CLIEngine } = require('eslint')
const { stripIndent } = require('common-tags')

const testCode = `${stripIndent`
const pipe = () => {}
const filter = () => {}
const isBig = (x => x > 10)
const square = x => x ** 2

;[ 1, 2, 3 ].map(pipe(filter(isBig), square))
`}\n`

test('load config and test some basics', t => {
  const output = (new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js',
  })).executeOnText(testCode)

  t.equal(output.errorCount, 0)
  t.end()
})
