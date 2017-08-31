import { Left, fromLeft } from './Left'
import { Test, describe, given, it } from '@typed/test'

export const test: Test = describe('Left', [
  describe(`Left.of`, [
    given(`a value`, [
      it(`returns a Left containing that value`, ({ equal }) => {
        const value = { a: 1 }
        const left = Left.of(value)

        equal(value, left['@167/Left'])
      }),
    ]),
  ]),

  describe('fromLeft', [
    given(`a Left a`, [
      it(`returns a`, ({ equal }) => {
        const value = { a: 1 }
        const left = Left.of(value)

        equal(value, fromLeft(left))
      }),
    ]),
  ]),
])
