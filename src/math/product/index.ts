import { multiply } from '../multiply'
import { reduce } from '../../list/reduce'

export const product: Product = reduce<number, number>(multiply, 1)

export interface Product {
  (numbers: Array<number>): number
  (numbers: ArrayLike<number>): number
  (numbers: ReadonlyArray<number>): number
}
