import * as assert from 'assert'

import { concat } from './concat'

describe('concat', () => {
  it('concatenates two lists', () => {
    assert.deepEqual(concat([ 1, 2 ], [ 3, 4 ]), [ 1, 2, 3, 4 ])
  })

  it('concatenates two strings', () => {
    assert.strictEqual(concat('foo', 'bar'), 'foobar')
  })
})
