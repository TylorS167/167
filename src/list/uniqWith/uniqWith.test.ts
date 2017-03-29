import * as assert from 'assert'

import { uniqWith } from './uniqWith'

describe('uniqWith', () => {
  describe('(a -> a -> boolean) -> [a]', () => {
    it('-> [a]', () => {
      const xs = [ 1, '1', 2, '2', 3, 4 ]
      const comparator = (x: number | string, y: number | string) => String(x) === String(y)

      assert.deepEqual(uniqWith(comparator, xs), [ 1, 2, 3, 4 ])
    })
  })
})
