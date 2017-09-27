import * as assert from 'assert'

import { dropLastWhile } from './dropLastWhile'

describe('dropLastWhile', () => {
  describe('given a number and an array', () => {
    it('removes n number of items from the end of the array', () => {
      const array = [ 1, 2, 3, 4, 5 ]
      const f = (x: number) => x > 3

      assert.deepEqual(dropLastWhile(f, array), [ 1, 2, 3 ])
      assert.deepEqual(dropLastWhile(f, [ 1, 2, 3, 4, 5, 2, 3, 4, 5 ]), [ 1, 2, 3, 4, 5, 2, 3 ])
      assert.deepEqual(dropLastWhile((n: number) => n !== 99, [ 1, 2, 3, 4, 5 ]), [])
    })
  })
})
