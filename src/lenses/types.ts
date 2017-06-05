export interface Lens<A, B> {
  view(obj: A): B
  updateAt(f: (value: B) => B, obj: A): A
}
