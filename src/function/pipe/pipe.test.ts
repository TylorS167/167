import * as assert from 'assert'

import { pipe } from './pipe'

describe('pipe', () => {
  it('pipes functions', () => {
    const f = (x: number) => x + 1
    const g = (x: number) => x * 2

    assert.strictEqual(pipe(f)(1), 2)
    assert.strictEqual(pipe(f, g)(1), 4)
    assert.strictEqual(pipe(f, g, g)(1), 8)
    assert.strictEqual(pipe(f, g, g, f)(1), 9)
    assert.strictEqual(pipe(f, g, g, f, g, g, f)(1), 37)
  })
})
