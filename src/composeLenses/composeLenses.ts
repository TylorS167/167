import { ComposeLenses } from './types'
import { Lens } from '../lens'
import { apply } from '../apply'
import { pipeLenses } from '../pipeLenses'
import { reverse } from '../reverse'

export const composeLenses: ComposeLenses = function(
  ...lenses: Array<Lens<any, any>>
): Lens<any, any> {
  return apply(reverse(lenses), pipeLenses)
}
