import * as assert from 'assert'

import { clone } from './clone'

describe('clone', () => {
  describe('given an object', () => {
    it('returns a cloned object', () => {
      const obj =
        {
          a: {
            b: {
              c: {
                d: 1,
                e: {
                  f: 2,
                },
              },
            },
          },
        }

      const clonedObj = clone(obj)

      assert.deepEqual(clonedObj, obj)
      assert.notStrictEqual(obj.a, clonedObj.a)
      assert.notStrictEqual(obj.a.b, clonedObj.a.b)
      assert.notStrictEqual(obj.a.b.c, clonedObj.a.b.c)
      assert.notStrictEqual(obj.a.b.c.e, clonedObj.a.b.c.e)
    })
  })

  describe('given an array', () => {
    it('returns a cloned array', () => {
      const array = [
        [ 1, 2 ],
        [ 2, 3 ],
        [
          [
            4, 5,
          ],
        ],
      ]

      const clonedArray = clone(array)

      assert.deepEqual(array, clonedArray)
      assert.notStrictEqual(array[0], clonedArray[0])
      assert.notStrictEqual(array[1], clonedArray[1])
      assert.notStrictEqual(array[2], clonedArray[2])
      assert.notStrictEqual(array[2][0], clonedArray[2][0])
    })
  })
})
