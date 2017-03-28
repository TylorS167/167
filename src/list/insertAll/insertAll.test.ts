import * as assert from 'assert'

import { insertAll } from './insertAll'

describe('insert', () => {
  describe('Int -> a -> List a', () => {
    it('returns List a', () => {
      assert.deepEqual(insertAll(2, [ 3, 3, 3 ], [ 1, 2, 4 ]), [ 1, 2, 3, 3, 3, 4 ])
    })
  })
})
