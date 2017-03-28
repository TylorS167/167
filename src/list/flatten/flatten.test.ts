import * as assert from 'assert'

import { flatten } from './flatten'

describe('flatten', () => {
  describe('given an array of arrays', () => {
    it('retuns an unnested array', () => {
      const arr = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ [ [ 7, 8 ] ] ] ]

      assert.deepEqual(flatten(arr), [ 1, 2, 3, 4, 5, 6, 7, 8 ])
    })
  })
})
