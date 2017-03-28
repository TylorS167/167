import * as assert from 'assert'

import { mapAccumRight } from './mapAccumRight'

describe('mapAccumRight', () => {
  describe('(b -> a -> [b, c]) -> b -> [a]' , () => {
    it('-> [ b, [c] ]', () => {
      const digits = [ '1', '2', '3', '4' ]
      const appender = (a: string, b: string) => [ a + b, a + b ] as [string, string]

      assert.deepEqual(mapAccumRight(appender, '5', digits), [ [ '12345', '2345', '345', '45' ], '12345' ])
    })
  })
})
