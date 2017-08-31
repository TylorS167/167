import { Right, fromRight } from './Right'
import { Test, describe, given, it } from '@typed/test'

export const test: Test = describe('Right', [
  describe(`Right.of`, [
    given(`a value`, [
      it(`returns a Right containing that value`, ({ equal }) => {
        const value = { a: 1 }
        const left = Right.of(value)

        equal(value, left['@167/Right'])
      }),
    ]),
  ]),

  describe('fromRight', [
    given(`a Right a`, [
      it(`returns a`, ({ equal }) => {
        const value = { a: 1 }
        const left = Right.of(value)

        equal(value, fromRight(left))
      }),
    ]),
  ]),
])
