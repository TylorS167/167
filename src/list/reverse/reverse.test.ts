import * as assert from 'assert'

import { reverse } from './reverse'

describe('reverse', () => {
  describe('[a]', () => {
    it('-> a', () => {
      assert.deepEqual(reverse([ 3, 2, 1 ]), [ 1, 2, 3 ])
    })
  })
})
