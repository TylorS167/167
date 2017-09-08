export type PropEq = {
  <K extends string, A>(key: K, value: A, object: { [Key in K]: A }): boolean
  <K extends string, A>(key: K, value: A): (object: { [Key in K]: A }) => boolean
  <K extends string>(key: K): <A>(value: A) => (object: { [Key in K]: A }) => boolean
  <K extends string, A>(key: K): (value: A) => (object: { [Key in K]: A }) => boolean
  <K extends string>(key: K): <A>(value: A, object: { [Key in K]: A }) => boolean
  <K extends string, A>(key: K): (value: A, object: { [Key in K]: A }) => boolean
}
