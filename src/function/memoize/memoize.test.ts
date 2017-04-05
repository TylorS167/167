import * as assert from 'assert'

import { curry2 } from '../curry'
import { memoize } from './memoize'

describe('memoize', () => {
  describe('given a function', () => {
    it('returns a memoized function', () => {
      let called = 0

      function f(a: number, b: number) {
        called += 1

        return a + b
      }

      const mf = memoize(f)

      assert.strictEqual(mf(1, 2), 3)
      assert.strictEqual(mf(1, 2), 3)

      assert.strictEqual(called, 1)
    })
  })

  describe('given a curried function', () => {
    it('returns a curried memoized function', () => {
      let called = 0

      function f(a: number, b: number) {
        called += 1

        return a + b
      }

      const c = curry2(f)

      const mf = memoize(c)

      assert.strictEqual(mf(1)(2), 3)
      assert.strictEqual(mf(1)(2), 3)

      assert.strictEqual(called, 1)
    })
  })
})
