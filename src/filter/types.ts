export type Filter = {
  <A>(f: (a: A, index: number) => boolean, list: ArrayLike<A>): ReadonlyArray<A>

  <A>(f: (a: A, index: number) => boolean): (list: ArrayLike<A>) => ReadonlyArray<A>
}
