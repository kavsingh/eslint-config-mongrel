const test = require('tape')
const { ESLint } = require('eslint')
const { stripIndent } = require('common-tags')

const baseConfig = require('../index')

const testCode = `${stripIndent`
const pipe = () => {}
const filter = () => {}
const isBig = (x => x > 10)
const square = x => x ** 2

;[1, 2, 3].map(pipe(filter(isBig), square))
`}\n`

test('load config and test some basics', async t => {
  const results = await (new ESLint({
    baseConfig,
    useEslintrc: false,
  })).lintText(testCode)

  if (!results.length) {
    t.end()

    return
  }

  // eslint-disable-next-line
  console.log(
    results.reduce((accum, { messages = [] }) => accum.concat(messages), []),
  )

  const errorCount =
    results.reduce((acc, result) => acc + result.errorCount, 0)

  t.equal(errorCount, 0)
  t.end()
})
