import * as assert from 'assert'

import { repeat } from './repeat'

describe('repeat', () => {
  it('a -> int -> [a]', () => {
    assert.deepEqual(repeat(1, 0), [])
    assert.deepEqual(repeat(1, 5), [ 1, 1, 1, 1, 1 ])
  })
})
