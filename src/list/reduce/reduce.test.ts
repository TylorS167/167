import * as assert from 'assert'

import { fromJust, isJust, just, nothing } from '../../maybe'

import { reduce } from './reduce'

describe(`reduce`, () => {
  describe(`(b -> a -> b) -> b -> Maybe a`, () => {
    it(`-> Just b`, () => {
      const maybeJust = just(1)
      const maybeNothing = nothing()

      const reducer = (acc: number, x: number) => acc + x

      assert.ok(isJust(reduce(reducer, 10, maybeJust)))
      assert.ok(isJust(reduce(reducer, 10, maybeNothing)))

      const valueJust = fromJust(reduce(reducer, 10, maybeJust))
      const valueNothing = fromJust(reduce(reducer, 10, maybeNothing))

      assert.strictEqual(valueJust, 11)
      assert.strictEqual(valueNothing, 10)
    })
  })
})
