import { Test, describe, given, it } from '@typed/test'
import { fromMaybe, map } from '@typed/maybe'

import { lensProp } from '../lensProp'
import { pipeLenses } from './pipeLenses'

export const test: Test = describe(`pipeLenses`, [
  describe('view', [
    given(`Lens a b and Lens b c`, [
      it(`returns Lens a c`, ({ equal }) => {
        const value = 1
        const obj = { a: { b: value } }
        const lensAB = lensProp<typeof obj, 'a'>('a')
        const lensBC = lensProp<typeof obj['a'], 'b'>('b')
        const { view } = pipeLenses(lensAB, lensBC)

        const INCORRECT_VALUE = value + 1
        const actual = fromMaybe(INCORRECT_VALUE, view(obj))

        equal(value, actual)
      }),
    ]),
  ]),

  describe('updateAt', [
    given(`Lens a b, Lens b c, and Lens c d`, [
      it(`returns Lens a d`, ({ equal }) => {
        const value = 1
        const obj = { a: { b: { c: value } } }
        const lensAB = lensProp<typeof obj, 'a'>('a')
        const lensBC = lensProp<typeof obj['a'], 'b'>('b')
        const lensCD = lensProp<typeof obj['a']['b'], 'c'>('c')
        const { updateAt } = pipeLenses(lensAB, lensBC, lensCD)

        const expected = { a: { b: { c: value + 1 } } }
        const actual = updateAt(map(x => x + 1))(obj)

        equal(expected, actual)
      }),
    ]),
  ]),
])
