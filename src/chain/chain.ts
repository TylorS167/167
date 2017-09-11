import { chain as eitherChain, isLeft, isRight } from '@typed/either'
import { isFuture, isPromiseLike } from '../is'
import { isJust, isNothing, chain as maybeChain } from '@typed/maybe'

import { Chain } from './types'
import { arrayChain } from './arrayChain'
import { curry2 } from '../curry'
import { chain as futureChain } from '@typed/future'

export const chain: Chain = curry2<any, any, any>(function(f: (value: any) => any, list: any): any {
  if (isJust(list) || isNothing(list)) return maybeChain(f, list)
  if (isLeft(list) || isRight(list)) return eitherChain(f, list)
  if (isFuture(list)) return futureChain(f, list)
  if (isPromiseLike(list)) return Promise.resolve(list.then(f))

  return arrayChain(f, list)
})
