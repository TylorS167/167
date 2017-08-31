import { Test, describe, it } from '@typed/test'

import { Nothing } from './Nothing'

export const test: Test = describe(`Nothing`, [
  it(`is Nothing`, ({ ok }) => {
    ok(Nothing['@167/Nothing'])
  }),
])
