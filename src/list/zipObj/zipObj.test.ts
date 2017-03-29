import * as assert from 'assert'

import { zipObj } from './zipObj'

describe('zipObj', () => {
  describe('[string] -> [a]', () => {
    it('-> { string: A }', () => {
      const keys = [ 'a', 'b', 'c' ]
      const values = [ 1, 2, 3 ]

      assert.deepEqual(zipObj(keys, values), { a: 1, b: 2, c: 3 })
      assert.deepEqual(zipObj(keys.concat('d'), values), { a: 1, b: 2, c: 3 })
      assert.deepEqual(zipObj(keys, values.concat(4)), { a: 1, b: 2, c: 3 })
    })
  })
})
