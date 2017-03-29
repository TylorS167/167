export interface ChainArity2 {
  <A, B>(f: (a: A) => B | Array<B>, list: Array<A>): ReadonlyArray<B>
  <A, B>(f: (a: A) => B | ReadonlyArray<B>, list: Array<A>): ReadonlyArray<B>
  <A, B>(f: (a: A) => B | Array<B>, list: ReadonlyArray<A>): ReadonlyArray<B>
  <A, B>(f: (a: A) => B | ReadonlyArray<B>, list: ReadonlyArray<A>): ReadonlyArray<B>

  <A, B>(f: (a: A) => B | Array<B>): (list: Array<A>) => ReadonlyArray<B>
  <A, B>(f: (a: A) => B | ReadonlyArray<B>): (list: Array<A>) => ReadonlyArray<B>
  <A, B>(f: (a: A) => B | Array<B>): (list: ReadonlyArray<A>) => ReadonlyArray<B>
  <A, B>(f: (a: A) => B | ReadonlyArray<B>): (list: ReadonlyArray<A>) => ReadonlyArray<B>
}
