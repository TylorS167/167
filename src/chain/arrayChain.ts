import { List } from '../types'
import { flatten } from '../flatten'
import { map } from '../map'

export function arrayChain<A, B>(f: (a: A) => List<B>, list: List<A>): List<B> {
  return flatten(map(f, list))
}
