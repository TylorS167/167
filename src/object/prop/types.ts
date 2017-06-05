export interface PropArity2 {
  <A extends object, K extends keyof A = keyof A>(prop: K, obj: A): A[K]

  <A extends object, K extends keyof A = keyof A>(prop: keyof A): (obj: A) => A[K]
}
