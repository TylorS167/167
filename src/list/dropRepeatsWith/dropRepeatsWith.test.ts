import * as assert from 'assert'

import { dropRepeatsWith } from './dropRepeatsWith'

describe('dropRepeatsWith', () => {
  it('drops repeated values', () => {
    const f = (x: number, y: number) => x === y

    const array = [ 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ]

    assert.deepEqual(dropRepeatsWith(f, array), [ 1, 2, 3, 4, 5 ])
  })
})
