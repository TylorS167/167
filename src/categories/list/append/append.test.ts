import { Test, describe, given, it } from '@typed/test'

import { append } from './append'

export const test: Test = describe('append', [
  given('given a value and an array', [
    it('returns a new array with the value appended', ({ equal }) => {
      const array = [1, 2, 3]
      const value = 4

      const newArray = append(value, array)

      equal(newArray, [1, 2, 3, 4])
    }),
  ]),
])
