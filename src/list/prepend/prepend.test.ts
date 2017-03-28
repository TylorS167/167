import * as assert from 'assert'

import { prepend } from './prepend'

describe('prepend', () => {
  describe('a -> [a]', () => {
    it('-> [a]', () => {
      assert.deepEqual(prepend(1, [ 2, 3, 4 ]), [ 1, 2, 3, 4 ])
    })
  })
})
