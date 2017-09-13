import { clone } from '../clone'
import { reduce } from '../reduce'

/**
 * Memoizes a function.
 * @name memoize<F extends Function>(f: F): F
 */
export const memoize = function<F extends Function>(f: F): F {
  const cache = new Map<any, any>()

  return (function(): any {
    const key = reduce((x, y) => x + JSON.stringify(y), '', arguments)

    if (cache.has(key)) return clone(cache.get(key))

    let result = f.apply(this, arguments)

    if (typeof result === 'function') result = memoize(result)

    cache.set(key, result)

    return clone(result)
  } as any) as F
}
