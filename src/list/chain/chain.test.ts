import * as assert from 'assert'

import { chain } from './chain'

describe('chain', () => {
  it('chains an array', () => {
    const array = [ 1, 2, 3 ]
    const duplicate = (x: number) => [ x, x ]

    assert.deepEqual(chain(duplicate, array), [ 1, 1, 2, 2, 3, 3 ])
  })
})
