export interface UnnestArity1 {
  <A>(list: ArrayLike<ArrayLike<A>>): ReadonlyArray<A>
  <A>(list: ArrayLike<A | ArrayLike<A>>): ReadonlyArray<A>
}
