export type Concat = {
  <A>(list1: ArrayLike<A>, list2: ArrayLike<A>): ReadonlyArray<A>
  <A>(list1: ArrayLike<A>): (list2: ArrayLike<A>) => ReadonlyArray<A>
}
