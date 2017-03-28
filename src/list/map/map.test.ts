import * as assert from 'assert'

import { map } from './map'

describe('map', () => {
  describe('(a -> b) -> List a', () => {
    it('-> [b]', () => {
      assert.deepEqual(map((x: number) => x + 1, [ 1, 2, 3 ]), [ 2, 3, 4 ])
    })
  })
})
