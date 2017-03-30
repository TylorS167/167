import * as assert from 'assert'

import { ascend } from './ascend'

describe('ascend', () => {
  describe('(a -> b) -> a -> a', () => {
    it('-> int', () => {
      const a = { a: 1 }
      const b = { a: 2 }
      const byA = (obj: { a: number }) => obj.a

      assert.strictEqual(ascend(byA, a, b), -1)
      assert.strictEqual(ascend(byA, b, a), 1)
      assert.strictEqual(ascend(byA, a, a), 0)
    })
  })
})
