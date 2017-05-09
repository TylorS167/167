import * as assert from 'assert'

import { anyPass } from './anyPass'

describe(`anyPass`, () => {
  describe(`[(a -> boolean)] -> a`, () => {
    it(`-> boolean`, () => {
      const value = 1

      const t = () => true
      const f = () => false

      assert.ok(anyPass([ t, t, t ], value))
      assert.ok(anyPass([ f, f, f, f, t ])(value))
      assert.ok(!anyPass([ f, f, f ], value))
    })
  })
})
