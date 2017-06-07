import * as assert from 'assert'

import { remove } from './remove'

describe('remove', () => {
  describe('int -> int -> [a]', () => {
    it('-> [a]', () => {
      assert.deepEqual(remove(2, 3, [ 1, 2, 3, 4, 5, 6, 7, 8 ]), [ 1, 2, 6, 7, 8 ])
      assert.deepEqual(remove(2, 3, [ 1, 2, 3, 4, 5, 6, 7, 8 ]).length, 5)
      assert.deepEqual(remove(2, 100, [ 1, 2, 3, 4 ]), [ 1, 2 ])
      assert.deepEqual(remove(2, 100, [ 1, 2, 3, 4 ]).length, 2)
      assert.deepEqual(remove(2, 1, [ 1, 2, 3 ]), [ 1, 2 ])
      assert.deepEqual(remove(2, 1, [ 1, 2, 3 ]).length, 2)
      assert.deepEqual(remove(0, 1, [ 1, 2, 3, 4 ]), [ 2, 3, 4 ])
      assert.deepEqual(remove(0, 1, [ 1, 2, 3, 4 ]).length, 3)
      // Fix issue #1
      assert.deepEqual(remove(3, 1, [ 1, 2, 3 ]), [ 1, 2, 3 ])
      assert.deepEqual(remove(4, 1, [ 1, 2, 3 ]), [ 1, 2, 3 ])
    })
  })
})
