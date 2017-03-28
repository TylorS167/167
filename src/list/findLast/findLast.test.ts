import * as assert from 'assert'

import { findLast } from './findLast'

describe('findLast', () => {
  describe('given a predicate and an array', () => {
    it('returns the first matching element', () => {
      assert.strictEqual(findLast((x: number) => x < 5, [ 1, 2, 3, 4, 5 ]), 4)
    })

    it('returns void when there are no matches', () => {
      assert.strictEqual(findLast((x: number) => x === 0, [ 1, 2, 3, 4, 5 ]), void 0)
    })
  })
})
