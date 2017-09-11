import { List, Predicate } from '../types'

import { curry2 } from '../curry'
import { not } from '../not'

export const allPath: AllPass = curry2(__allPass)

export type AllPass = {
  <A>(predicates: List<Predicate<A>>, value: A): boolean
  <A>(predicates: List<Predicate<A>>): Predicate<A>
}

function __allPass<A>(predicates: List<Predicate<A>>, value: A): boolean {
  const predicateCount = predicates.length

  for (let i = 0; i < predicateCount; ++i) if (not(predicates[i](value))) return false

  return true
}
