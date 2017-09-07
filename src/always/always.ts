export function always<A>(a: A) {
  function constant(...args: Array<any>): A
  function constant(): A {
    return a
  }

  return constant
}
