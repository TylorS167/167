export type Prop = {
  <A>(prop: number, obj: ArrayLike<A>): A
  <A, K extends keyof A = keyof A>(prop: K, obj: A): A[K]

  <A>(prop: number): (obj: ArrayLike<A>) => A
  (prop: number): <A>(obj: ArrayLike<A>) => A
  <A, K extends keyof A>(prop: K): (obj: A) => A[K]

  <K extends string>(prop: K): <A>(obj: { readonly [Key in K]: A }) => A
}
