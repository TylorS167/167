import { List } from '../types'

export type Filter = {
  <A>(f: (a: A, index: number) => boolean, list: List<A>): List<A>

  <A>(f: (a: A, index: number) => boolean): (list: List<A>) => List<A>
}
