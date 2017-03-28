import * as assert from 'assert'

import { contains } from './contains'

describe('contains', () => {
  it('returns true when given a value an array contains', () => {
    assert.ok(contains(1, [ 2, 3, 1 ]))
  })

  it('returns false when given a value not contained in an array', () => {
    assert.ok(!contains(1, [ 2, 3, 4 ]))
  })
})
