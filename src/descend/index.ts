import { ComparisonNumbers } from '../types'
import { curry3 } from '../curry'

export const descend: Descend = curry3(function ascend<A, B>(
  f: (a: A) => B,
  a: A,
  b: A
): ComparisonNumbers {
  const aa = f(a)
  const bb = f(b)

  if (aa < bb) return 1

  if (aa > bb) return -1

  return 0
})

export type Descend = {
  <A, B>(f: (a: A) => B, a: A, b: A): ComparisonNumbers
  <A, B>(f: (a: A) => B, a: A): (b: A) => ComparisonNumbers
  <A, B>(f: (a: A) => B): (a: A) => (b: A) => ComparisonNumbers
  <A, B>(f: (a: A) => B): (a: A, b: A) => ComparisonNumbers
}
