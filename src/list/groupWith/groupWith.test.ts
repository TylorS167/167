import * as assert from 'assert'

import { equals } from '../../relation/equals'
import { groupWith } from './groupWith'

describe('groupWith', () => {
  describe('given (a -> a -> boolean) -> List a', () => {
    it('returns array of grouped arrays', () => {
      const array = [ 0, 1, 1, 2, 3, 5, 8, 8, 13, 21, 25, 25 ]
      const expected = [ [ 0 ], [ 1, 1 ], [ 2 ], [ 3 ], [ 5 ], [ 8, 8 ], [ 13 ], [ 21 ], [ 25, 25 ] ]

      assert.deepEqual(groupWith(equals, array), expected)
    })
  })
})
