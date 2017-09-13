import { List } from '../types'
import { isIterator } from '../is'

/**
 * Converts any `Iterable`, `Iterator` or `ArrayLike` to an `Array`.
 * @name arrayFrom<A>(iterable: Iterable<A> | Iterator<A> | List<A>): Array<A> 
 */
export function arrayFrom<A>(iterable: Iterable<A> | Iterator<A> | List<A>): Array<A> {
  if (Array.isArray(iterable)) return iterable

  if (isIterator(iterable)) return Array.from(toIterable(iterable))

  return Array.from(iterable as Iterable<A>)
}

function toIterable<A>(iterator: Iterator<A>): Iterable<A> {
  return {
    [Symbol.iterator]() {
      return iterator
    },
  }
}
