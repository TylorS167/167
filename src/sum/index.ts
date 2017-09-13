import { List } from '../types'
import { add } from '../add'
import { reduce } from '../reduce'

/**
 * Adds together all of the numbers in a list.
 * @name sum(number: List<number>): number
 */
export const sum: (numbers: List<number>) => number = reduce(add, 0)
