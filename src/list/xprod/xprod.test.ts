import * as assert from 'assert'

import { xprod } from './xprod'

describe('xprod', () => {
  describe('[a] -> [b]', () => {
    it('-> [ (a, b) ]', () => {
      const xs = [ 1, 2, 3 ]
      const ys = [ 'a', 'b', 'c' ]

      assert.deepEqual(
        xprod(xs, ys),
        [ [ 1, 'a' ], [ 1, 'b' ], [ 1, 'c' ], [ 2, 'a' ], [ 2, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 3, 'b' ], [ 3, 'c' ] ],
      )
    })
  })
})
