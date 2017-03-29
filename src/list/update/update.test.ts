import * as assert from 'assert'

import { update } from './update'

describe('update', () => {
  describe('int -> a -> [a]', () => {
    it('-> a', () => {
      const list = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

      assert.strictEqual(update(-1, 1, list), list)
      assert.strictEqual(update(20, 1, list), list)
      assert.strictEqual(update(8, 9, list), list)
      assert.deepEqual(update(0, 10, list), [ 10, 2, 3, 4, 5, 6, 7, 8 ])
      assert.deepEqual(update(0, 1, []), [])
    })
  })
})
