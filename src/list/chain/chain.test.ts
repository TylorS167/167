import * as assert from 'assert'

import { isMaybe, just, nothing } from '../../maybe'

import { chain } from './chain'

describe('chain', () => {
  it('chains an array', () => {
    const array = [ 1, 2, 3 ]
    const duplicate = (x: number) => [ x, x ]

    assert.deepEqual(chain(duplicate, array), [ 1, 1, 2, 2, 3, 3 ])
  })

  it('chains a Maybe', () => {
    const add1 = chain((x: number) => just(x + 1))

    const maybes = [ just(1), nothing() ].map(add1)

    maybes.forEach((maybe) => assert.ok(isMaybe(maybe)))
  })
})
