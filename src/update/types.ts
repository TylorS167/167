export interface UpdateArity3 {
  <A>(index: number, value: A, list: ArrayLike<A>): ReadonlyArray<A>

  (index: number): UpdateArity2
  <A>(index: number, value: A): UpdateArity1<A>
}

export interface UpdateArity2 {
  <A>(value: A, list: ArrayLike<A>): ReadonlyArray<A>
  <A>(value: A): UpdateArity1<A>
}

export interface UpdateArity1<A> {
  (list: ArrayLike<A>): ReadonlyArray<A>
}
