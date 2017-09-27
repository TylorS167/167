import * as assert from 'assert'

import { dropWhile } from './dropWhile'

describe('dropWhile', () => {
  describe('given a number and an array', () => {
    it('removes n number of items from the beginning of the array', () => {
      const array = [ 1, 2, 3, 4, 5 ]
      const f = (x: number) => x < 3

      assert.deepEqual(dropWhile(f, array), [ 3, 4, 5 ])
      assert.deepEqual(dropWhile(f, [ 1, 2, 3, 4, 5, 2, 3, 4, 5 ]), [ 3, 4, 5, 2, 3, 4, 5 ])
      assert.deepEqual(dropWhile((n: number) => n !== 99, [ 1, 2, 3, 4, 5 ]), [])
    })
  })
})
