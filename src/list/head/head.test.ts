import * as assert from 'assert'

import { head } from './head'

describe(`head`, () => {
  describe(`given an array with one item of value 0`, () => {
    it(`returns 0`, () => {
      // Fixture setup
      const expectedResult = 0
      const list = [ expectedResult ]
      // Exercise system
      const actualResult = head(list)
      // Verify outcome
      assert.equal(expectedResult, actualResult, 'head')
    })
  })

  describe(`given an empty array`, () => {
    it(`returns undefined`, () => {
      // Fixture setup
      const expectedResult = void 0
      const list: Array<any> = []
      // Exercise system
      const actualResult = head(list)
      // Verify outcome
      assert.equal(expectedResult, actualResult, 'head')
    })
  })

  describe(`given an array of 1, 2, 3`, () => {
    it(`returns 1`, () => {
      // Fixture setup
      const expectedResult = 1
      const list = [ 1, 2, 3 ]
      // Exercise system
      const actualResult = head(list)
      // Verify outcome
      assert.equal(expectedResult, actualResult, 'head')
    })
  })

  describe(`given a string 'foo'`, () => {
    it(`returns 'f'`, () => {
      // Fixture setup
      const expectedResult = 'f'
      const list = 'foo'
      // Exercise system
      const actualResult = head(list)
      // Verify outcome
      assert.equal(expectedResult, actualResult, 'head')
    })
  })
})
