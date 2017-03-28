import * as assert from 'assert'

import { range } from './range'

describe('range', () => {
  describe('int -> int', () => {
    it('-> [int]', () => {
      assert.deepEqual(range(1, 5), [ 1, 2, 3, 4, 5 ])
    })
  })
})
