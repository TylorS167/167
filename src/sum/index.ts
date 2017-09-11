import { List } from '../types'
import { add } from '../add'
import { reduce } from '../reduce'

export const sum: (numbers: List<number>) => number = reduce(add, 0)
