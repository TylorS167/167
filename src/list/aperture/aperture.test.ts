import * as assert from 'assert'

import { aperture } from './aperture'

describe('aperture', () => {
  describe('given a aperture of 2 and [0, 1, 2, 3]', () => {
    it('returns [[0, 1], [1, 2], [2, 3]]', () => {
      assert.deepEqual(aperture(2, [ 0, 1, 2, 3 ]), [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ] ])
    })
  })

  describe('given an aperture of 3 and [1, 2, 3, 4, 5]', () => {
    it('returns [[1, 2, 3], [2, 3, 4], [3, 4, 5]]', () => {
      assert.deepEqual(
        aperture(3, [ 1, 2, 3, 4, 5 ]),
        [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ],
      )
    })
  })

  describe('given an aperture greater than the length of given list', () => {
    it('returns an empty list', () => {
      assert.deepEqual(aperture(100, [ 1, 2, 3, 4, 5 ]), [])
      assert.deepEqual(aperture(2, [ 1 ]), [])
    })
  })
})

const x = aperture(3, [ 1, 2, 3 ])

const [ one, two, three ] = x[0]
