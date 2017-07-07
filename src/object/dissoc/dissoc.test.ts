import * as assert from 'assert'

import { dissoc } from './'

describe(`dissoc`, () => {
  describe(`given a property to remove and an object`, () => {
    it(`removes the given property`, () => {
      const object = { a: 1, b: 2 }
      const expected = { b: 2 }

      const actual = dissoc('a', object)

      assert.deepEqual(actual, expected)
    })
  })
})
