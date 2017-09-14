import { Test, describe, given, it } from '@typed/test'
import { isJust, isNothing } from '../Maybe'

import { find } from '../find'
import { propEq } from './propEq'

export const test: Test = describe(`propEq`, [
  given(`a key`, [
    it(`returns a function`, ({ equal }) => {
      const aProp = propEq('a')

      equal('function', typeof aProp)
    }),
  ]),

  given(`a key and a value`, [
    it(`returns a function`, ({ equal }) => {
      const aPropIsOne = propEq('a', 1)

      equal('function', typeof aPropIsOne)
    }),
  ]),

  given(`a key, value and object`, [
    it(`returns true if object has same value at specified key`, ({ ok }) => {
      interface Foo {
        readonly a: number
        readonly b: number
      }

      const testFoo: Foo = { a: 1, b: 2 }

      const aPropIsOne = propEq('a', 1)

      ok(aPropIsOne(testFoo))
    }),

    it(`returns false if object does not have same value at specified key`, ({ notOk }) => {
      interface Foo {
        readonly a: number
        readonly b: number
      }

      const aPropIsOne = propEq('a', 1)

      const testFoo: Foo = { a: 2, b: 1 }

      notOk(aPropIsOne(testFoo))
    }),
  ]),

  it(`doesn't suck at inference`, ({ ok }) => {
    const objs = [{ a: 7, b: 'A' }, { a: 42, b: 'B' }]
    const ofPropA = propEq('a')
    const objOf42 = ofPropA(42)
    const objOf167 = ofPropA(167)

    const obj42 = find(objOf42)(objs)
    const obj167 = find(objOf167, objs)

    ok(isJust(obj42))
    ok(isNothing(obj167))
  }),
])
