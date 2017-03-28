export interface ChainArity2 {
  <A, B>(f: (a: A) => Array<B>, list: Array<A>): ReadonlyArray<B>
  <A, B>(f: (a: A) => ReadonlyArray<B>, list: Array<A>): ReadonlyArray<B>
  <A, B>(f: (a: A) => Array<B>, list: ReadonlyArray<A>): ReadonlyArray<B>
  <A, B>(f: (a: A) => ReadonlyArray<B>, list: ReadonlyArray<A>): ReadonlyArray<B>

  <A, B>(f: (a: A) => Array<B>): (list: Array<A>) => ReadonlyArray<B>
  <A, B>(f: (a: A) => ReadonlyArray<B>): (list: Array<A>) => ReadonlyArray<B>
  <A, B>(f: (a: A) => Array<B>): (list: ReadonlyArray<A>) => ReadonlyArray<B>
  <A, B>(f: (a: A) => ReadonlyArray<B>): (list: ReadonlyArray<A>) => ReadonlyArray<B>
}
