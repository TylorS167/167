import { add } from '../add'
import { reduce } from '../../list/reduce'

export const sum: Sum = reduce<number, number>(add, 0)

export interface Sum {
  (numbers: Array<number>): number
  (numbers: ArrayLike<number>): number
  (numbers: ReadonlyArray<number>): number
}
