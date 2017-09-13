import { Test, describe, given, it } from '@typed/test'
import { fromJust, isJust, isNothing } from '@typed/maybe'

import { Either } from '../Either'
import { toMaybe } from './'

export const test: Test = describe(`toMaybe`, [
  given(`an Either a b`, [
    it(`returns Maybe b`, ({ ok, equal }) => {
      ok(isNothing(toMaybe(Either.left(1))))

      const value = 1
      const maybe = toMaybe(Either.of(value))

      if (!isJust(maybe)) throw new Error('Maybe should be just')

      equal(value, fromJust(maybe))
    }),
  ]),

  given(`a`, [
    it(`returns Just a`, ({ equal }) => {
      const value = 1
      const maybe = toMaybe(value)

      if (isJust(maybe)) equal(value, fromJust(maybe))
    }),
  ]),

  given(`undefined`, [
    it(`returns Nothing`, ({ ok }) => {
      ok(isNothing(toMaybe(void 0)))
    }),
  ]),
])
