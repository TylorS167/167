import * as assert from 'assert'

import { invoker } from './'

describe('invoker', () => {
  describe('given an arity, method name, and object', () => {
    it('returns a curried function that calls a object method', () => {
      const obj = { foo: (a: number, b: number): number => a + b }

      const foo = invoker<number, number, number, typeof obj>(2, 'foo', obj)

      console.log(foo.toString())

      assert.strictEqual(obj.foo(1, 2), foo(1)(2))
    })
  })
})
