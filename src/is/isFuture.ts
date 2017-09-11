import { Future } from '@typed/future'

/**
 * Returns true if a value is a `Future`
 * @name isFuture<A, B>(x: any): x is Future<A, B>
 */
export function isFuture<A, B>(x: any): x is Future<A, B> {
  return x && typeof x.fork === 'function' && x.fork.length === 2
}
