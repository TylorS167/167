import { map as eitherMap, isLeft, isRight } from '@typed/either'
import { isFuture, isPromiseLike } from '../__internal__'
import { isJust, isNothing, map as maybeMap } from '@typed/maybe'

import { Map } from './types'
import { curry2 } from '../curry'
import { map as futureMap } from '@typed/future'
import { length } from '../length'

/**
 * Map over the value contained in a data structure.
 * Works for `ArrayLike`, `Maybe`, `Either`, `Future` and `PromiseLike` data strctures.
 * @name map<A, B>(f: (value: A, index: number) => B, list: ArrayLike<A>): ReadonlyArray<B>
 */
export const map: Map = curry2<any, any, any>(function map(f: (value: any) => any, list: any): any {
  if (isJust(list) || isNothing(list)) return maybeMap(f, list)
  if (isLeft(list) || isRight(list)) return eitherMap(f, list)
  if (isFuture(list)) return futureMap(f, list)
  if (isPromiseLike(list)) return Promise.resolve(list.then(f))

  return arrayMap(f, list)
})

function arrayMap<A, B>(f: (value: A, index: number) => B, list: ArrayLike<A>): ReadonlyArray<B> {
  const itemCount = length(list)
  const newList = Array(itemCount)

  for (let i = 0; i < itemCount; ++i) newList[i] = f(list[i], i)

  return newList
}