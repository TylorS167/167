import * as assert from 'assert'

import { adjust } from './adjust'

describe(`adjust`, () => {
  describe('given a function (a -> a), an index, and a list', () => {
    it('returns a new list with new value at given index', () => {
      const f = (a: number) => a + 1
      const index = 1
      const list = [ 0, 1, 2 ]

      assert.deepEqual(adjust(f, index, list), [ 0, 2, 2 ])
    })
  })
})
