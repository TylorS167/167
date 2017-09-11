import { reduce } from '../reduce'

export const memoize = function<F extends Function>(f: F): F {
  const cache = new Map<any, any>()

  return (function(): any {
    const key = reduce((x, y) => x + JSON.stringify(y), '', arguments)

    if (cache.has(key)) return cache.get(key)

    let result = f.apply(this, arguments)

    if (typeof result === 'function') result = memoize(result)

    cache.set(key, result)

    return result
  } as any) as F
}
