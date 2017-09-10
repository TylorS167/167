import { always } from '../always'
import { equals } from '../equals'
import { ifElse } from '../ifElse'
import { keys } from '../keys'
import { length } from '../length'
import { pipe } from '../pipe'

export const isEmpty: <A>(object: A) => boolean = ifElse(
  x => x === null || x === void 0,
  always(false),
  pipe(keys, length, equals(0))
)
