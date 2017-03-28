import * as assert from 'assert'

import { drop } from './drop'

describe('drop', () => {
  describe('given a number and an array', () => {
    it('removes n number of items from the beginning of the array', () => {
      const array = [ 1, 2, 3, 4, 5 ]
      const n = 2

      assert.deepEqual(drop(n, array), [ 3, 4, 5 ])
      assert.deepEqual(drop(5, array), [])
      assert.deepEqual(drop(100, array), [])
    })
  })

  describe('given a number and a string', () => {
    it('slices the string', () => {
      assert.strictEqual(drop(2, 'foo'), 'o')
      assert.strictEqual(drop(500, 'foo'), '')
    })
  })
})
