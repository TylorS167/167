import * as assert from 'assert'

import { uniqBy } from './uniqBy'

describe('uniqBy', () => {
  describe('(a -> b) -> [a]', () => {
    it('-> [a]', () => {
      const list = [ -1, -5, 2, 10, 1, 2 ]

      assert.deepEqual(uniqBy(Math.abs, list), [ -1, -5, 2, 10 ])
    })
  })
})
