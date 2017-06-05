import { Lens } from '../types'
import { adjust } from '../../list/adjust'

export const lensIndex = <A>(index: number): Lens<ReadonlyArray<A>, A> => new LensIndex<A>(index)

class LensIndex<A> implements Lens<ReadonlyArray<A>, A> {
  protected index: number

  constructor(index: number) {
    this.index = index
  }

  public view(array: ReadonlyArray<A>): A {
    return array[this.index]
  }

  public updateAt(f: (value: A) => A, list: ReadonlyArray<A>): ReadonlyArray<A> {
    const { index } = this

    return adjust(f, index, list)
  }
}
