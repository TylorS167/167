import * as assert from 'assert'
import { move } from './move'
import { range } from '../range'

describe(`move`, () => {
  describe(`given fromIndex, a toIndex, and an array`, () => {
    it(`returns a new array with fromIndex at toIndex`, () => {
      assert.deepEqual(move(1, 3, range(1, 5)), [1, 3, 4, 2, 5])
      assert.deepEqual(move(3, 1, range(1, 5)), [1, 4, 2, 3, 5])
      assert.deepEqual(move(1, 1, range(1, 5)), range(1, 5))
    })
  })
})