import { Lens } from '../types'
import { set } from '../../object/set'

export function lensProp<A, K extends keyof A>(prop: K): Lens<A, A[K]> {
  return new LensProp<A, K>(prop)
}

class LensProp<A, K extends keyof A> implements Lens<A, A[K]> {
  protected prop: K

  constructor(prop: K) {
    this.prop = prop
  }

  public view(obj: A): A[K] {
    return obj[this.prop]
  }

  public updateAt(f: (value: A[K]) => A[K], obj: A): A {
    const { prop } = this

    const newValue: A[K] = f(obj[prop])

    return set<A>(prop, newValue, obj)
  }
}
