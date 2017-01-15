import fs from 'fs'
import path from 'path'
import { expect } from 'chai'
import reactReduxConnectHelpers from '../src'
import { transformFileSync } from 'babel-core'

function testTransformation (actual, expected) {
  let actualVal, expectedVal

  try {
    actualVal = eval(actual)
    expectedVal = eval(expected)
  } catch (err) {
    console.log('    Cannot transform the src!')
    expect(eval(actual)).to.not.throw(Error)
  }

  console.log(
    `    (${actualVal} === ${expectedVal}) // =>`,
    actualVal === expectedVal
  )
  expect(actualVal).to.equal(expectedVal)
}

describe('ReactReduxConnectHelpersTest', () => {
  const fixturesDir = path.join(__dirname, 'fixtures')
  const options = { presets: ['es2015'], plugins: [reactReduxConnectHelpers] }

  fs.readdirSync(fixturesDir).map((caseName) => {
    it(`should ${caseName.split('-').join(' ')}`, () => {
      // paths
      const fixtureDir = path.join(fixturesDir, caseName)
      const actualPath = path.join(fixtureDir, 'actual.js')
      const expectedPath = path.join(fixtureDir, 'expected.js')
      // scripts
      const actual = transformFileSync(actualPath, options).code
      const expected = fs.readFileSync(expectedPath).toString()
      // Test it!
      testTransformation(actual, expected)
    })
  })
})
