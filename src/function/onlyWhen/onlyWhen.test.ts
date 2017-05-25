import * as assert from 'assert'

import { id } from '..'
import { onlyWhen } from './onlyWhen'

describe(`onlyWhen`, () => {
  describe(`given a predicate that is false`, () => {
    it(`returns default value`, () => {
      const expected = 0
      assert.strictEqual(expected, onlyWhen((_: number) => false, expected, id, 1))
    })
  })

  describe(`given a predicate that is true`, () => {
    it(`returns f a`, () => {
      const expected = 1
      assert.strictEqual(2, onlyWhen((x: number) => x === expected, 0, (x: number) => x + 1, expected))
    })
  })
})
