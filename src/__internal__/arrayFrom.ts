import { List } from '../types'
import { isIterator } from './isIterator'

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
