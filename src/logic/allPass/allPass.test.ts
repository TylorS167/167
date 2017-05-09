import * as assert from 'assert'

import { allPass } from './allPass'

describe(`allPass`, () => {
  describe(`[(a -> boolean)] -> a`, () => {
    it(`-> boolean`, () => {
      const value = 1

      const t = () => true
      const f = () => false
      const g = (x: number) => x <= 1

      assert.ok(allPass([ t, t, t, g ], value))
      assert.ok(!allPass([ t, t, t, f ], value))
      assert.ok(!allPass([ f ])(value))
    })
  })
})
