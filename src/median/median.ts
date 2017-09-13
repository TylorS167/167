import { Maybe, Nothing } from '../Maybe'

import { List } from '../types'
import { ascend } from '../ascend'
import { id } from '../id'
import { mean } from '../mean'
import { pipe } from '../pipe'
import { slice } from '../slice'
import { sort } from '../sort'

/**
 * Calculates the median of a `List`. If the calculated median is `NaN`
 * a `Nothing` is returned otherwise a `Just` containing the median will be returned.
 * @name median(numbers: List<number>): Maybe<number>
 */
export function median(numbers: List<number>): Maybe<number> {
  const length = numbers.length

  if (length === 0) return Nothing

  const width = 2 - length % 2
  const index = (length - width) / 2

  const calculateMedian = pipe<List<number>, Maybe<number>>(
    sort(ascend(id)),
    slice(index, Maybe.of(index + width)),
    mean,
    numberToMaybe
  )

  return calculateMedian(numbers)
}

function numberToMaybe(num: number): Maybe<number> {
  return Number.isNaN(num) ? Nothing : Maybe.of(num)
}
