import { UnnestArity1 } from './types'
import { chain } from '../chain'
import { id } from '../../function'

export const unnest: UnnestArity1 = chain(id)
