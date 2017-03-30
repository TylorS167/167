export type ComparisonNumbers = -1 | 0 | 1

export interface AscendArity3 {
  <A, B>(fn: (a: A) => B, a: A, b: A): ComparisonNumbers
  <A, B>(fn: (a: A) => B, a: A): AscendArity1<A>
  <A, B>(fn: (a: A) => B): AscendArity2<A>
}

export interface AscendArity2<A> {
  (a: A, b: A): ComparisonNumbers
  (a: A): AscendArity1<A>
}

export interface AscendArity1<A> {
  (b: A): ComparisonNumbers
}
