import * as assert from 'assert'

import { equals } from './equals'

describe(`equals`, () => {
  describe(`given two arrays with equal values`, () => {
    it(`returns true`, () => {
      const a = [ 0, 1, 2, 3 ]
      const b = [ 0, 1, 2, 3 ]

      assert.ok(equals(a, b))
    })
  })
})
