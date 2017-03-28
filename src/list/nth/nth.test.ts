import * as assert from 'assert'

import { nth } from './nth'

describe('nth', () => {
  describe('int -> [a]', () => {
    it('-> a | void', () => {
      const list = [ 'foo', 'bar', 'baz', 'quux' ]

      assert.strictEqual(nth(1, list), 'bar') // => 'bar'
      assert.strictEqual(nth(-1, list), 'quux') // => 'quux'
      assert.strictEqual(nth(-99, list), void 0) // => undefined

      assert.strictEqual(nth(2, 'abc'), 'c') // => 'c'
      assert.strictEqual(nth(3, 'abc'), '') // => ''
    })
  })
})
