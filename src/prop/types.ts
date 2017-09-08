export type Prop = {
  <A, K extends keyof A = keyof A>(prop: K, obj: A): A[K]
  <A, K extends keyof A>(prop: K): (obj: A) => A[K]

  <K extends string>(prop: K): <A>(obj: { readonly [Key in K]: A }) => A
}
