import { Index, List } from '../types'

import { Maybe } from '../Maybe'

export type IndexOf = {
  <A>(value: A, list: List<A>): Maybe<Index>
  <A>(value: A): (list: List<A>) => Maybe<Index>
}
