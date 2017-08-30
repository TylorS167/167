import { clone } from '../clone'
import { curry3 } from '../../function/curry'

export const set: SetArity3 = curry3(
  function set<O>(key: keyof O, value: O[typeof key], obj: O): O {
    const clonedObj = clone(obj)

    clonedObj[key] = value

    return clonedObj
  },
)

export interface SetArity3 {
  <O>(key: keyof O, value: O[typeof key], obj: O): O

  <O>(key: keyof O, value: O[typeof key]): SetArity1<O>
  <O>(key: keyof O): SetArity2<O, typeof key>
}

export interface SetArity2<O, K extends keyof O> {
  (value: O[K], obj: O): O

  (value: O[K]): SetArity1<O>
}

export interface SetArity1<O> {
  (obj: O): O
}
