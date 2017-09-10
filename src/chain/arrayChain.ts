import { flatten } from '../flatten'
import { map } from '../map'

export function arrayChain<A, B>(f: (a: A) => ArrayLike<B>, list: ArrayLike<A>): ReadonlyArray<B> {
  return flatten(map(f, list))
}
