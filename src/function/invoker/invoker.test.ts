import * as assert from 'assert'

import { invoker } from './'

describe('invoker', () => {
  describe('given an arity, method name', () => {
    it('returns a curried function that calls a object method', () => {
      const obj = { foo: (a: number, b: number): number => a + b }

      const foo = invoker<typeof obj, number, number, number>(2, 'foo')

      assert.strictEqual(obj.foo(1, 2), foo(1)(2)(obj))
    })
  })
})
