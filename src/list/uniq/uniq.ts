export const uniq: Uniq = <A>(list: Array<A>): ReadonlyArray<A> => Array.from(new Set<A>(list))

export interface Uniq {
  <A>(list: Array<A>): ReadonlyArray<A>
  <A>(list: ArrayLike<A>): ReadonlyArray<A>
  <A>(list: ReadonlyArray<A>): ReadonlyArray<A>
}
