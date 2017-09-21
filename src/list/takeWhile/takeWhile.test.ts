import * as assert from 'assert'

import { takeWhile } from '../takeWhile'

describe(`takeWhile`, () => {
  describe(`given a predicate function and a list`, () => {
    it(`returns a list containing only the values initially matching predicate`, () => {
      const predicate = (x: number) => x < 3
      const list = [ 0, 1, 2, 3, 2, 1, 0 ]

      const expected = [ 0, 1, 2 ]

      assert.deepEqual(takeWhile(predicate, list), expected)
    })

    it(`does not call predicate with undefined`, () => {
      const predicate = (x: number) => assert.equal(typeof x, 'number') || x < 3
      const list = [ 0, 1, 2 ]

      assert.deepEqual(list, takeWhile(predicate, list))
    })
  })
})
