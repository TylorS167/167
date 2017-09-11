import { ComparisonNumbers } from '../types'
import { curry3 } from '../curry'

export const ascend: AscendArity3 = curry3(function ascend<A, B>(
  f: (a: A) => B,
  a: A,
  b: A
): ComparisonNumbers {
  const aa = f(a)
  const bb = f(b)

  if (aa < bb) return -1

  if (aa > bb) return 1

  return 0
})

export type AscendArity3 = {
  <A, B>(f: (a: A) => B, a: A, b: A): ComparisonNumbers
  <A, B>(f: (a: A) => B): AscendArity2<A>
  <A, B>(f: (a: A) => B, a: A): AscendArity1<A>
}

export type AscendArity2<A> = {
  (a: A, b: A): ComparisonNumbers
  (a: A): AscendArity1<A>
}

export type AscendArity1<A> = (b: A) => ComparisonNumbers
