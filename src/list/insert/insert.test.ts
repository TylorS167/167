import * as assert from 'assert'

import { insert } from './insert'

describe('insert', () => {
  describe('Int -> a -> List a', () => {
    it('returns List a', () => {
      assert.deepEqual(insert(2, 3, [ 1, 2, 4 ]), [ 1, 2, 3, 4 ])
    })
  })
})
