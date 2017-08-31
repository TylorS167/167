import { Maybe, Nothing, fromMaybe } from './'
import { Test, describe, given, it } from '@typed/test'

export const test: Test = describe(`Maybe`, [
  describe(`Maybe.of`, [
    given(`a value`, [
      it(`returns a Just containing that value`, ({ ok }) => {
        const maybe = Maybe.of(1)

        ok(maybe.hasOwnProperty('@167/Just'))
      }),
    ]),
  ]),

  describe(`Maybe.chain`, [
    given(`(a -> Maybe b) and Just a`, [
      it(`returns the result of calling (a -> Maybe b)`, ({ equal }) => {
        const just = Maybe.of(1)

        equal(just, Maybe.chain(Maybe.of, just))
        equal(Nothing, Maybe.chain(() => Nothing, just))
      }),
    ]),

    given(`(a -> Maybe b) and Nothing`, [
      it(`returns Nothing`, ({ equal }) => {
        equal(Nothing, Maybe.chain(Maybe.of, Nothing))
      }),
    ]),
  ]),

  describe(`Maybe.map`, [
    given(`(a -> b) and Just a`, [
      it(`returns Just b`, ({ equal }) => {
        const just = Maybe.of(1)
        const f = (x: number) => x + 1

        equal(Maybe.of(2), Maybe.map(f, just))
      }),
    ]),

    given(`(a -> b) and Nothing`, [
      it(`returns Nothing`, ({ equal }) => {
        const maybe = Nothing
        const f = (x: number) => x + 1

        equal(Nothing, Maybe.map(f, maybe))
      }),
    ]),
  ]),

  describe(`Maybe.ap`, [
    given(`Just (a -> b) and Just a`, [
      it(`returns Just b`, ({ equal }) => {
        const value = Maybe.of(1)
        const fn = Maybe.of((x: number) => x + 1)

        equal(Maybe.of(2), Maybe.ap(fn, value))
      }),
    ]),

    given(`Just (a -> b) and Nothing`, [
      it(`returns Nothing`, ({ equal }) => {
        const value = Nothing
        const fn = Maybe.of((x: number) => x + 1)

        equal(Nothing, Maybe.ap(fn, value))
      }),
    ]),

    given(`Nothing and Just a`, [
      it(`returns Nothing`, ({ equal }) => {
        equal(Nothing, Maybe.ap(Nothing, Maybe.of(1)))
      }),
    ]),

    given(`Nothing and Nothing`, [
      it(`returns Nothing`, ({ equal }) => {
        equal(Nothing, Maybe.ap(Nothing, Nothing))
      }),
    ]),
  ]),
])

export const fromMaybeTest: Test = describe(`fromMaybe`, [
  given(`Just a`, [
    it(`returns value contained in Just`, ({ equal }) => {
      const value = { a: 1 }
      const defaultValue = { a: 2 }

      const maybe = Maybe.of(value)

      equal(value, fromMaybe(defaultValue, maybe))
    }),
  ]),

  given(`Nothing`, [
    it(`returns default value`, ({ equal }) => {
      const defaultValue = { a: 2 }

      equal(defaultValue, fromMaybe(defaultValue, Nothing))
    }),
  ]),
])
