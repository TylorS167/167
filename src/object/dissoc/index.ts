import { clone } from '../clone'
import { curry2 } from '../../function/curry/curry2'

export const dissoc: Dissoc = curry2(function dissoc<A extends object>(prop: keyof A, obj: A) {
  const newObj = {} as A

  for (const key in obj) if (key !== prop) newObj[key] = clone(obj[key])

  return newObj
})

export interface Dissoc {
  <A extends object, B extends object = A>(prop: keyof A, obj: A): B
  <A extends object, B extends object = A>(prop: keyof A, obj: A): B
}
