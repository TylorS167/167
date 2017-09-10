import { Maybe, chain, fromJust, isNothing } from '@typed/maybe'

import { Lens } from '../lens'
import { PipeLenses } from './types'
import { curry2 } from '../curry'
import { reduce } from '../reduce'

export const pipeLenses: PipeLenses = function pipeLenses(
  ...lenses: Array<Lens<any, any>>
): Lens<any, any> {
  return reduce(__pipeLenses, lenses[0], lenses.slice(1))
}

function __pipeLenses<A, B, C>(lensAB: Lens<A, B>, lensBC: Lens<B, C>): Lens<A, C> {
  function view(obj: A): Maybe<C> {
    return chain(b => lensBC.view(b), lensAB.view(obj))
  }

  function updateAt(f: (value: Maybe<C>) => Maybe<C>, obj: A): A {
    const value = f(view(obj))

    const nestedObject = lensAB.view(obj)

    if (isNothing(nestedObject)) return obj

    return lensAB.updateAt(
      () => Maybe.of(lensBC.updateAt(() => value, fromJust(nestedObject))),
      obj
    )
  }

  return { view, updateAt: curry2(updateAt) }
}
