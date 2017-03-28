import * as assert from 'assert'

import { find } from './find'

describe('find', () => {
  describe('given a predicate and an array', () => {
    it('returns the first matching element', () => {
      assert.strictEqual(find((x: number) => x < 5, [ 1, 2, 3, 4, 5 ]), 1)
    })

    it('returns void when there are no matches', () => {
      assert.strictEqual(find((x: number) => x === 0, [ 1, 2, 3, 4, 5 ]), void 0)
    })
  })
})
