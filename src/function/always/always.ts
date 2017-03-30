export function always<A>(a: A) {
  return function <B>(b: B): A {
    return Function.prototype(b), a
  }
}
