import * as assert from 'assert'

import { last } from './last'

describe('last', () => {
  describe('str', () => {
    it('-> str', () => {
      assert.strictEqual(last('abc'), 'c')
      assert.strictEqual(last(''), '')
    })
  })

  describe('[a]', () => {
    it('-> a', () => {
      assert.strictEqual(last([ 1, 2, 3 ]), 3)
    })
  })

  describe('[]', () => {
    it('-> void', () => {
      assert.strictEqual(last([]), void 0)
    })
  })
})
