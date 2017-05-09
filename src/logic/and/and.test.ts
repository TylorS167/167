import * as assert from 'assert'

import { and } from './and'

describe(`and`, () => {
  describe(`true -> true`, () => {
    it(`-> true`, () => {
      assert.ok(and(true, true))
    })
  })

  describe(`true -> false`, () => {
    it(`-> false`, () => {
      assert.ok(!and(true, false))
    })
  })

  describe(`false -> true`, () => {
    it(`-> false`, () => {
      assert.ok(!and(false, true))
    })
  })

  describe(`false -> false`, () => {
    it(`-> false`, () => {
      assert.ok(!and(false, false))
    })
  })
})
