import { ZipObjArity2 } from './types'
import { curry2 } from '@typed/curry'

export const zipObj: ZipObjArity2 = curry2(
  function zipObj<A>(strings: Array<string>, list: Array<A>): { readonly [ key: string ]: A } {
    const minLength = Math.min(strings.length, list.length)
    const object: any = {}

    for (let i = 0; i < minLength; ++i)
      object[strings[i]] = list[i]

    return object
  },
)
