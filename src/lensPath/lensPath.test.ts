import { Test, describe, given, it } from '@typed/test'
import { fromJust, isJust } from '@typed/maybe'

import { lensPath } from './lensPath'

export const test: Test = describe(`lensPath`, [
  given(`a path`, [
    it(`returns a `, ({ equal }) => {
      const value = 1
      const obj = { a: value }

      const lens = lensPath<typeof obj, 'a'>(['a'])

      const actual = lens.view(obj)

      if (isJust(actual)) equal(value, fromJust(actual))
    }),
  ]),
])
