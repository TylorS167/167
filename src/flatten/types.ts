export type Flatten = {
  <A>(list: ArrayLike<A | ArrayLike<A>>): ReadonlyArray<A>
  <A>(list: ArrayLike<A | ArrayLike<A> | ArrayLike<ArrayLike<A>>>): ReadonlyArray<A>
  <A>(
    list: ArrayLike<A | ArrayLike<A> | ArrayLike<ArrayLike<A>> | ArrayLike<ArrayLike<ArrayLike<A>>>>
  ): ReadonlyArray<A>
  <A>(
    list: ArrayLike<
      | A
      | ArrayLike<A>
      | ArrayLike<ArrayLike<A>>
      | ArrayLike<ArrayLike<ArrayLike<A>>>
      | ArrayLike<ArrayLike<ArrayLike<ArrayLike<A>>>>
    >
  ): ReadonlyArray<A>
  <A>(list: ArrayLike<ArrayLike<A>>): ReadonlyArray<A>
  <A>(list: ArrayLike<ArrayLike<ArrayLike<A>>>): ReadonlyArray<A>
  <A>(list: ArrayLike<ArrayLike<ArrayLike<ArrayLike<A>>>>): ReadonlyArray<A>
  <A>(list: ArrayLike<ArrayLike<ArrayLike<ArrayLike<ArrayLike<A>>>>>): ReadonlyArray<A>
  <A>(list: ArrayLike<any>): ReadonlyArray<A>
}
