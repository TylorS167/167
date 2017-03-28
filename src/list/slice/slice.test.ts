import * as assert from 'assert'

import { slice } from './slice'

describe('slice', () => {
  describe('int -> int -> [a]', () => {
    it('-> [a]', () => {
      const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

      assert.deepEqual(slice(0, 10, list), list)
      assert.deepEqual(slice(5, 5, list), [ ])
      assert.deepEqual(slice(1, 2, list), [ 2 ])
    })
  })

  describe('int -> int -> string', () => {
    it('-> string', () => {
      const str = 'hello'

      assert.deepEqual(slice(1, 2, str), 'e')
    })
  })
})
