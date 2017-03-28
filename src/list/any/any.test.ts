import * as assert from 'assert'

import { any } from './any'

describe('any', () => {
  describe('given a predicate and a list with 1 value matching predicate', () => {
    it('returns true', () => {
      const f = (x: number) => x === 1
      const list = [ 0, 2, 3, 1 ]

      assert.ok(any(f)(list))
    })
  })

  describe('given a predicate and a list with no matches ', () => {
    it('returns false', () => {
      const f = (x: number) => x === 1
      const list = [ 2, 2, 2, 3, 3 ]
      assert.ok(!any(f)(list))
    })
  })
})
