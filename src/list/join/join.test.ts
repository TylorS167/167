import * as assert from 'assert'

import { join } from './join'

describe('join', () => {
  describe('string -> List a', () => {
    it('returns a string', () => {
      assert.strictEqual(join(' ', [ 'a', 'b', 'c' ]), 'a b c')
    })
  })
})
