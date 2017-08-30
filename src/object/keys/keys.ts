export const keys = <A>(obj: A): ReadonlyArray<keyof A> =>
  Object.keys(obj) as ReadonlyArray<string> as ReadonlyArray<keyof A>
