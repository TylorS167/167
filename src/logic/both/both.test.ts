import { gt, lt } from '../../relation/equality'
import { ok, strictEqual } from 'assert'

import { both } from './both'

describe(`both`, () => {
  it(`returns a function`, () => {
    const lt10AndGt5 = both(lt(10), gt(5))

    strictEqual(typeof lt10AndGt5, 'function')
  })

  describe(`given 2 functions of arity 1`, () => {
    it(`returns true if both functions return true`, () => {
      const lt10AndGt5 = both(lt(10), gt(5))

      ok(lt10AndGt5(7))
    })

    it(`returns false if one function returns false`, () => {
      const lt10AndGt5 = both(lt(10), gt(5))

      ok(!lt10AndGt5(11))
    })
  })
})
