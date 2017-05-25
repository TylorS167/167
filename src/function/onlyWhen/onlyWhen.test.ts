import * as assert from 'assert'

import { id } from '..'
import { onlyWhen } from './onlyWhen'

describe(`onlyWhen`, () => {
  describe(`given a predicate that is false`, () => {
    it(`returns default value`, () => {
      const expected = 0
      const actual = onlyWhen((_: number) => false, expected, id, 1)
      assert.strictEqual(actual, expected)
    })
  })

  describe(`given a predicate that is true`, () => {
    it(`returns f a`, () => {
      const a = 1
      const expected = 2
      const actual = onlyWhen((x: number) => x === a, 0, (x: number) => x + 1, a)
      assert.strictEqual(actual, expected)
    })
  })
})
