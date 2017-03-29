import * as assert from 'assert'

import { unnest } from './unnest'

describe('unnest', () => {
  describe('[ a | [a] ]', () => {
    it('-> [a]', () => {
      assert.deepEqual(unnest([ 1, [ 1, 2 ] ]), [ 1, 1, 2 ])
    })
  })
})
