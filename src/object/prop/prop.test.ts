import * as assert from 'assert'

import { prop } from './prop'

describe('prop', () => {
  describe('K -> { K: V }', () => {
    it('-> V', () => {
      assert.strictEqual(prop('a', { a: 1 }), 1)
      assert.strictEqual(prop<{ a: 1}>('a')({ a: 1 }), 1)
    })
  })
})
