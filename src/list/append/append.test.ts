import * as assert from 'assert'

import { append } from './append'

describe('append', () => {
  describe('given a value and an array', () => {
    it('returns a new array with the value appended', () => {
      const array = [ 1, 2, 3 ]
      const value = 4

      const newArray = append(value, array)

      assert.deepEqual(newArray, [ 1, 2, 3, 4 ])
    })
  })
})
