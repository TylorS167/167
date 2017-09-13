import { List, Predicate } from '../types'

import { Maybe } from '../Maybe'

export type Cond = {
  <A, B>(conditions: List<Conditional<A, B>>, value: A): Maybe<B>
  <A, B>(conditions: List<Conditional<A, B>>): (value: A) => Maybe<B>
}

/**
 * @name Conditional
 * @type
 */
export type Conditional<A, B> = [Predicate<A>, (value: A) => B]
