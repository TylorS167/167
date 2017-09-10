import { isIterator } from './isIterator'

export function isIterable<A>(x: any): x is Iterable<A> {
  return x && typeof x[Symbol.iterator] === 'function' && isIterator(x[Symbol.iterator]())
}
