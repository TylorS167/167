import * as assert from 'assert'

import { none } from './none'

describe('none', () => {
  describe('(a -> boolean) -> [a]', () => {
    it('-> boolean', () => {
      const isEven = (n: number) => n % 2 === 0

      assert.strictEqual(none(isEven, [ 1, 3, 5, 7, 9, 11 ]), true) // => true
      assert.strictEqual(none(isEven, [ 1, 3, 5, 7, 8, 11 ]), false) // => false
    })
  })
})
