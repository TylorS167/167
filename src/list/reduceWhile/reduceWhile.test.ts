import * as assert from 'assert'

import { reduceWhile } from './reduceWhile'

describe('reduceWhile', () => {
  describe('(b -> a -> boolean) -> (b -> a -> b) -> b -> [a]', () => {
    it('-> b', () => {
      const add = (x: number, y: number) => x + y
      const isOdd = (_: any, x: number) => x % 2 === 1

      assert.deepEqual(reduceWhile(isOdd, add, 0, [ 1, 3, 5, 60, 777, 800 ]), 9)
      assert.deepEqual(reduceWhile(isOdd, add, 111, [ 2, 4, 6 ]), 111)
    })
  })
})
