import { List } from '../types'
import { multiply } from '../multiply'
import { reduce } from '../reduce'

export const product: (numbers: List<number>) => number = reduce(multiply, 1)
