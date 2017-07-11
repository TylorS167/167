import { curry3 } from '../../function/curry/curry3'

export const move: MoveArity3 = curry3(function move<A>(
  fromIndex: number,
  toIndex: number,
  list: Array<A>,
): ReadonlyArray<A>
{
  const length = list.length
  const newArray = Array(length)

  if (fromIndex < 0 || fromIndex >= length || toIndex < 0 || toIndex >= length)
    return list

  for (let i = 0; i < length; ++i)
    newArray[i] = list[findMovedIndex(i, fromIndex, toIndex)]

  return newArray
})

function findMovedIndex(i: number, fromIndex: number, toIndex: number): number {
  if (i === toIndex) return fromIndex

  if (fromIndex < toIndex) {
    if (i < fromIndex || i > toIndex) return i

    return i + 1
  }

  if (i > fromIndex || i < toIndex) return i

  return i - 1
}

export interface MoveArity3 {
  <A>(fromIndex: number, toIndex: number, list: Array<A>): ReadonlyArray<A>
  <A>(fromIndex: number, toIndex: number, list: ArrayLike<A>): ReadonlyArray<A>
  <A>(fromIndex: number, toIndex: number, list: ReadonlyArray<A>): ReadonlyArray<A>
  <A>(fromIndex: number, toIndex: number): MoveArity1<A>
  <A>(fromIndex: number): MoveArity2<A>
}

export interface MoveArity2<A> {
  (toIndex: number, list: Array<A>): ReadonlyArray<A>
  (toIndex: number, list: ArrayLike<A>): ReadonlyArray<A>
  (toIndex: number, list: Array<A>): ReadonlyArray<A>

  (toIndex: number): MoveArity1<A>
}

export interface MoveArity1<A> {
  (list: Array<A>): ReadonlyArray<A>
}
