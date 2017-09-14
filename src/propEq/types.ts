import { StrMap } from '../types'

export type PropEq = {
  <K extends string, A, O extends StrMap<K, A>>(key: K, value: A, object: O): boolean
  <K extends string, A>(key: K, value: A): <O extends StrMap<K, A>>(object: O) => boolean
  <K extends string>(key: K): {
    <A, O extends StrMap<K, A>>(value: A, object: O): boolean
    <A>(value: A): <O extends StrMap<K, A>>(object: O) => boolean
  }
}
