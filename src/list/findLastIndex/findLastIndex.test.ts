import * as assert from 'assert'

import { findLastIndex } from './findLastIndex'

describe('findIndex', () => {
  describe('given a predicate and an array', () => {
    it('returns the first matching element', () => {
      assert.strictEqual(findLastIndex((x: number) => x < 5, [ 1, 2, 3, 4, 5 ]), 3)
    })

    it('returns void when there are no matches', () => {
      assert.strictEqual(findLastIndex((x: number) => x === 0, [ 1, 2, 3, 4, 5 ]), -1)
    })
  })
})
