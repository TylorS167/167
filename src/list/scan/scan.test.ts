import * as assert from 'assert'

import { scan } from './scan'

describe('scan', () => {
  it('(b -> a -> b) -> b -> [a] -> [b]', () => {
    const append = <A>(acc: Array<A>, value: A) => acc.concat(value)
    const xs = [ 1, 2, 3 ]

    assert.deepEqual(scan(append, [], xs), [ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ] ])
  })
})
