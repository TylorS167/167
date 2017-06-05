import * as assert from 'assert'

import { updateAt, view } from '../'

import { lensPath } from './lensPath'

interface Foo {
  a: {
    b: {
      c: {
        d: {
          e: number,
        },
      },
    },
  },
}

describe('lensPath', () => {
  describe('given a path of keys', () => {
    it('creates a lens', () => {
      const foo = { a: { b: { c: { d: { e: 1 } } } } }

      const lens = lensPath<Foo>([ 'a', 'b', 'c', 'd', 'e' ])

      assert.strictEqual(view(lens, foo), 1)

      const bar = updateAt(lens, () => 2, foo)

      assert.deepEqual(bar, { a: { b: { c: { d: { e: 2 } } } } })
    })
  })
})
