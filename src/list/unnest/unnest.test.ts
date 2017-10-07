import * as assert from 'assert'

import { unnest } from './unnest'

describe('unnest', () => {
  describe('[ a | [a] ]', () => {
    it('-> [a]', () => {
      const arr: ReadonlyArray<number | ReadonlyArray<number>> = [ 1, [ 1, 2 ] ]
      assert.deepEqual(unnest(arr), [ 1, 1, 2 ])
    })
  })
})
