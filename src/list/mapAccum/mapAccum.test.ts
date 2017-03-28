import * as assert from 'assert'

import { mapAccum } from './mapAccum'

describe('mapAccum', () => {
  describe('(b -> a -> [b, c]) -> b -> [a]' , () => {
    it('-> [ b, [c] ]', () => {
      const digits = [ '1', '2', '3', '4' ]
      const appender = (a: string, b: string) => [ a + b, a + b ] as [string, string]

      assert.deepEqual(mapAccum(appender, '0', digits), [ '01234', [ '01', '012', '0123', '01234' ] ])
    })
  })
})
