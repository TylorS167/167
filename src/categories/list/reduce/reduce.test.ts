import { Test, describe, given, it } from '@typed/test'

import { reduce } from './'

export const test: Test = describe(`reduce`, [
  given(`(b -> a -> b) -> b -> List a`, [
    it(`-> b`, ({ equal }) => {
      const sut = [1, 2, 3]
      const initialState = 0

      const reducer = (acc: number, x: number) => acc + x

      const expected = 6

      equal(expected, reduce(reducer, initialState, sut))
    }),
  ]),
])
