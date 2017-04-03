import { RangeArity2 } from './types'
import { curry2 } from '../../function/curry'

export const range: RangeArity2 = curry2((from: number, to: number) => {
  const length = (to - from) + 1
  const list = Array(length)

  for (let i = 0; i < length; ++i)
  {
    list[i] = i + from
  }

  return list
})
