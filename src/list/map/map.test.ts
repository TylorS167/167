import * as assert from 'assert'

import { fromJust, isJust, just, nothing } from '../../maybe'

import { map } from './map'

describe('map', () => {
  describe('(a -> b) -> List a', () => {
    it('-> [b]', () => {
      assert.deepEqual(map((x: number) => x + 1, [ 1, 2, 3 ]), [ 2, 3, 4 ])
    })
  })

  describe('(a -> b) -> Maybe a', () => {
    it('-> Just b', () => {
      const maybe = just(1)
      const f = (x: number) => x + 1

      assert.ok(isJust(map(f, maybe)))
      assert.ok(!isJust(map(f, nothing())))
    })
  })
})
