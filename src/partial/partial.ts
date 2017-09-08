import { PartialFn, PlaceHolder } from './types'

import { apply } from '../apply'
import { concat } from '../concat'
import { curry2 } from '../curry'
import { curryN } from '../curryN'
import { filter } from '../filter'
import { length } from '../length'

// import { length  } from '../length'

/**
 * A placeholder for `partial`.
 * @name __
 */
export const __: PlaceHolder = { '@@placeholder': true }

const isPlaceholder = (x: any): x is PlaceHolder => x['@@placeholder'] === true

/**
 * Allows partially applying a function
 * @name partial(f: Function, args: ArrayLike<any>): PartiallyAppliedFunction
 */
export const partial: PartialFn = curry2(
  (f: (...args: Array<any>) => any, args: Array<any>): any => {
    const fnLength = length(f) as number
    const argsLength = length(args)

    if (fnLength === 0) return f
    if (argsLength === 0) return curryN(fnLength as 2, f)

    const placeholderAmount = filter(isPlaceholder, args).length
    const expectedLength = Math.max(0, fnLength - argsLength) + placeholderAmount

    function partiallyApplied(...otherArgs: Array<any>) {
      if (placeholderAmount === 0) return apply(concat(args, otherArgs), f)

      const combinedArgs: Array<any> = Array(fnLength)

      for (let i = 0; i < combinedArgs.length; ++i)
        combinedArgs[i] = isPlaceholder(args[i]) ? otherArgs.shift() : args[i]

      return apply(concat(combinedArgs, otherArgs), f)
    }

    return curryN(expectedLength as 2, partiallyApplied)
  }
)
