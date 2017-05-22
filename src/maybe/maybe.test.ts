import * as assert from 'assert'

import { Just, Maybe, Nothing, fromJust, isJust, isMaybe, isNothing, just, nothing } from './'

describe(`Maybe`, () => {
  describe(`Just`, () => {
    describe(`just`, () => {
      it(`creates a Just`, () => {
        assert.ok(isJust(just(1)))
        assert.strictEqual(fromJust(just(1)), 1)
      })
    })

    describe(`isJust`, () => {
      it(`returns true given a Just`, () => {
        assert.ok(isJust(just(1)))
      })

      it(`returns false given a Nothing`, () => {
        assert.ok(!isJust(nothing()))
      })
    })

    describe(`fromJust`, () => {
      it(`returns value of a Just`, () => {
        assert.strictEqual(fromJust(just(1)), 1)
        assert.strictEqual(fromJust(just(1)), 1)
        assert.strictEqual(fromJust(just(5)), 5)
        assert.strictEqual(fromJust(just(5)), 5)
      })
    })
  })

  describe(`Nothing`, () => {
    describe(`nothing`, () => {
      it(`returns a Nothing`, () => {
        assert.ok(isNothing(nothing()))
      })
    })

    describe(`isNothing`, () => {
      it(`returns true when given a Nothing`, () => {
        assert.ok(isNothing(nothing()))
      })

      it(`returns false when given a Just`, () => {
        assert.ok(!isNothing(just(1)))
      })
    })
  })

  describe(`Maybe`, () => {
    describe(`isMaybe`, () => {
      it(`returns true given a Just or Nothing`, () => {
        assert.ok(isMaybe(just(1)))
        assert.ok(isMaybe(nothing()))
      })

      it(`returns false given anything else`, () => {
        assert.ok(!isMaybe(1))
        assert.ok(!isMaybe('hello'))
      })
    })
  })
})
