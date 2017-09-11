import { Test, describe, given, it } from '@typed/test'

import { ascend } from './'
import { prop } from '../prop'

export const test: Test = describe(`ascend`, [
  given(`(a -> b), a and a`, [
    it(`returns a ComparisionNumber`, ({ equal }) => {
      const a = { a: 1 }
      const b = { a: 2 }
      const byA = prop<typeof a, 'a'>('a')

      equal(ascend(byA, a, b), -1)
      equal(ascend(byA, b, a), 1)
      equal(ascend(byA, a, a), 0)
    }),
  ]),
])
