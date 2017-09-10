import { Future } from '@typed/future'

export function isFuture(x: any): x is Future<any, any> {
  return x && typeof x.fork === 'function'
}
