import * as assert from 'assert'

import { intersperse } from './intersperse'

describe('intersperse', () => {
  describe('a -> List a', () => {
    it('returns List a', () => {
      assert.deepEqual(intersperse(10, [ 1, 2, 3 ]), [ 1, 10, 2, 10, 3 ])
    })
  })
})
