export interface PropEqArity3 {
  <O, K extends keyof O>(key: K, value: O[K], object: O): boolean

  <O, K extends keyof O>(key: K): (value: O[K], object: O) => boolean
  <O, K extends keyof O>(key: K, value: O[K]): (object: O) => boolean

  <O, K extends keyof O>(key: K): (value: O[K]) => (object: O) => boolean
}
