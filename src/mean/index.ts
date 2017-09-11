import { List } from '../types'
import { divide } from '../divide'
import { length } from '../length'
import { sum } from '../sum'

export const mean = (numbers: List<number>) => divide(sum(numbers), length(numbers))
