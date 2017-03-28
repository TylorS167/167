import * as assert from 'assert'

import { contains } from '../contains'
import { partition } from './partition'

describe('partition', () => {
  describe('(a -> boolean) -> [a]', () => {
    it('-> [ [a], [a] ]', () => {
      const actual = partition<string>(contains('s'), [ 'sss', 'ttt', 'foo', 'bars' ])
      const expected = [ [ 'sss', 'bars' ], [ 'ttt', 'foo' ] ]

      assert.deepEqual(actual, expected)
    })
  })
})
