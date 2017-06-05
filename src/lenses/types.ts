export interface Lens<A extends object, B> {
  view(obj: A): B
  updateAt(f: (value: B) => B, obj: A): A
}
