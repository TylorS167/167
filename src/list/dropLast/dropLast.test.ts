import * as assert from 'assert'

import { dropLast } from './dropLast'

describe('dropLast', () => {
  describe('given a number and an array', () => {
    it('removes n number of items from the end of the array', () => {
      const array = [ 1, 2, 3, 4, 5 ]
      const n = 2

      assert.deepEqual(dropLast(n, array), [ 1, 2, 3 ])
      assert.deepEqual(dropLast(5, array), [])
      assert.deepEqual(dropLast(100, array), [])
    })
  })

  describe('given a number and a string', () => {
    it('slices the string', () => {
      assert.strictEqual(dropLast(2, 'foo'), 'f')
      assert.strictEqual(dropLast(500, 'foo'), '')
    })
  })
})
