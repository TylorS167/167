import { Lens } from '../types'
import { set } from '../../object/set'

export function lensProp<A extends Object>(prop: keyof A): Lens<A, A[typeof prop]> {
  return new LensProp<A, typeof prop>(prop)
}

class LensProp<A extends object, K extends keyof A> implements Lens<A, A[K]> {
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
