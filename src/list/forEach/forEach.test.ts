import * as assert from 'assert'

import { forEach } from './forEach'

describe('forEach', () => {
  describe('given a function and an array', () => {
    it('executes the function on each element in the array, returning the original array', () => {
      const array = [ 1, 2, 3 ]

      let run = 0

      const f = () => ++run

      assert.strictEqual(array, forEach(f, array))
      assert.strictEqual(run, 3)
    })
  })
})
