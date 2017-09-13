import { List } from '../types'
import { multiply } from '../multiply'
import { reduce } from '../reduce'

/**
 * Calculates the produce of a list of numbers.
 * @name produce(numbers: List<number>): number
 */
export const product: (numbers: List<number>) => number = reduce(multiply, 1)
