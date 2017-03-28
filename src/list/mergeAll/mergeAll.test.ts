import * as assert from 'assert'

import { mergeAll } from './mergeAll'

describe('mergeAll', () => {
  describe('[{ K: V}]', () => {
    it('-> { K: V }', () => {
      const actual = mergeAll([ { a: 1 }, { b: 2 }, { c: 3 } ])

      const expected = { a: 1, b: 2, c: 3 }

      assert.deepEqual(actual, expected)
    })
  })
})
