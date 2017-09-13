import { List } from '../types'
import { divide } from '../divide'
import { length } from '../length'
import { sum } from '../sum'

/**
 * Calculates the average of a list of numbers.
 * @name mean(numbers: List<number>): number
 */
export const mean = (numbers: List<number>) => divide(length(numbers), sum(numbers))
