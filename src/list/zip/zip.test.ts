import * as assert from 'assert'

import { zip } from './zip'

describe('zip', () => {
  describe('[a] -> [b]', () => {
    it('-> [ (a, b) ]', () => {
      assert.deepEqual(
        zip([ 1, 2, 3 ], [ 'a', 'b', 'c' ]),
        [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ],
      )

      assert.deepEqual(
        zip([ 1, 2, 3, 4 ], [ 'a', 'b', 'c' ]),
        [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ],
      )

      assert.deepEqual(
        zip([ 1, 2, 3 ], [ 'a', 'b', 'c', 'd' ]),
        [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ],
      )
    })
  })
})
