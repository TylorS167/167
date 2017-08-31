import { Just, fromJust } from './Just'
import { Test, describe, given, it } from '@typed/test'

export const justOf: Test = describe(`Just.of`, [
  given(`a value`, [
    it(`returns a Just containing that value`, ({ equal }) => {
      const expected = { a: 1 }

      const just = Just.of(expected)

      equal(expected, just['@167/Just'])
    }),
  ]),
])

export const fromJustTest: Test = describe(`fromJust`, [
  given(`a Just<A>`, [
    it(`returns A`, ({ equal }) => {
      const value = { a: 1 }
      const just = Just.of(value)

      equal(value, fromJust(just))
    }),
  ]),
])
