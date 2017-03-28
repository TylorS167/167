import * as assert from 'assert'

import { all } from './all'

describe('all', () => {
  describe('given a function and a list of a single value', () => {
    it('returns true', () => {
      const f = (x: number) => x === 1
      const list = [ 1, 1, 1, 1, 1 ]

      assert.ok(all(f)(list))
    })
  })

  describe('given a function and a list of a multiple values', () => {
    it('returns false', () => {
      const f = (x: number) => x === 1
      const list = [ 1, 1, 1, 2, 1 ]

      assert.ok(!all(f)(list))
    })
  })
})
