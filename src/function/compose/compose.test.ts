import * as assert from 'assert'

import { compose } from './compose'

describe('compose', () => {
  it('composes functions', () => {
    const f = (x: number) => x + 1
    const g = (x: number) => x * 2

    assert.strictEqual(compose(f)(1), 2)
    assert.strictEqual(compose(g, f)(1), 4)
    assert.strictEqual(compose(g, g, f)(1), 8)
    assert.strictEqual(compose(f, g, g, f)(1), 9)
    assert.strictEqual(compose(f, g, g, f, g, g, f)(1), 37)
  })
})
