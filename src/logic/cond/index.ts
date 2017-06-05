import { Maybe, just, nothing } from '../../maybe'

import { CondArity2 } from './types'
import { Conditional } from '../condOr'
import { curry2 } from '../../function/curry/curry2'

export const cond: CondArity2 = curry2(
  function cond<A, B>(predicates: Array<Conditional<A, B>>, a: A): Maybe<B> {
    for (const [ predicate, f ] of predicates)
      if (predicate(a))
        return just(f(a))

    return nothing()
  },
)
