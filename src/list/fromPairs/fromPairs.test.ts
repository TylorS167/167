import * as assert from 'assert'

import { fromPairs } from './fromPairs'

describe('fromPairs', () => {
  describe('given an array of key/value pairs', () => {
    it('returns an object containing those key/value pairs', () => {
      const map = new Map([ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ])
      const pairs = Array.from(map)

      assert.deepEqual(fromPairs(pairs), { 1: 1, 2: 2, 3: 3 })
    })
  })
})
