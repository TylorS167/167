export interface PropArity2 {
  <A, K extends keyof A = keyof A>(prop: K, obj: A): A[K]

  <A, K extends keyof A = keyof A>(prop: keyof A): (obj: A) => A[K]
}
