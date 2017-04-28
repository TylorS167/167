import * as assert from 'assert'

import { partial, __ } from './partial'

describe(`partial`, () => {
  describe(`given a function of Arity 0`, () => {
    it('returns a function of arity 0', () => {
      const foo = () => 1
      const partialFoo = partial(foo, [])

      assert.strictEqual(partialFoo(), 1)
    })
  })

  describe(`given a function of Arity 1 and no args`, () => {
    it(`returns a function of arity 1`, () => {
      const foo = (a: number) => a
      const partialFoo = partial(foo, [])

      assert.strictEqual(partialFoo(1), 1)
      assert.strictEqual(partialFoo(2), 2)
    })
  })

  describe(`given a function of Arity 1 and 1 arg`, () => {
    it(`returns a function of Arity 0`, () => {
      const foo = (a: number) => a
      const partialFoo = partial(foo, [ 1 ])

      assert.strictEqual(partialFoo(), 1)
      assert.strictEqual(partialFoo(), 1)
    })
  })

  describe(`given a function of Arity 1 and 1 Placeholder`, () => {
    it(`returns a function of Arity 1`, () => {
      const foo = (a: number) => a
      const partialFoo = partial(foo, [ __ ])

      assert.strictEqual(partialFoo(1), 1)
    })
  })

  describe(`given a function of Arity 2 and no args`, () => {
    it(`returns a curried function`, () => {
      const foo = (a: number, b: number) => a + b
      const partialFoo = partial(foo, [])

      assert.strictEqual(partialFoo(1)(2), 3)
    })
  })

  describe(`given a function of Arity 2 and 1 arg`, () => {
    it(`returns a function of Arity 1`, () => {
      const foo = (a: number, b: number) => a + b
      const partialFoo = partial(foo, [ 1 ])

      assert.strictEqual(partialFoo(2), 3)
    })
  })

  describe(`given a function of Arity2 and 1 placeholder and 1 arg`, () => {
    it(`returns a function of Arity 1`, () => {
      const foo = (a: number, b: number) => a + b
      const partialFoo = partial(foo, [ __, 100 ])

      assert.strictEqual(partialFoo(1), 101)
      assert.strictEqual(partialFoo(10), 110)
    })
  })

  describe(`given a function of Arity 3 and 2 placeholders and 1 arg`, () => {
    it(`returns a function of Arity 2`, () => {
      const foo = (a: number, b: number, c: number) => a + b + c
      const partialFoo = partial(foo, [ __, __, 1 ])

      assert.strictEqual(partialFoo(10)(20), 31)
    })
  })
})
