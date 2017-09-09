import { Just, fromJust, isJust } from '@typed/maybe'
import { Test, describe, given, it } from '@typed/test'

import { lensProp } from '../lensProp'
import { view } from './'

export const test: Test = describe(`view`, [
  given(`a Lens and an object`, [
    it(`calls Lens.view`, ({ ok, equal }) => {
      const value = 1
      const a = { a: value }
      const lens = lensProp<typeof a>('a')

      ok(isJust(view(lens, a)))
      equal(value, fromJust(view(lens, a) as Just<number>))
    }),
  ]),
])
