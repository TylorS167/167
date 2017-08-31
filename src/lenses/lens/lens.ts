import { Lens } from '../types'

export function lens<A, B extends A[keyof A]>(
  getter: (a: A) => B,
  setter: (value: B, obj: A) => A): Lens<A, B>
{
  return new BasicLens<A, B>(getter, setter)
}

class BasicLens<A, B extends A[keyof A]> implements Lens<A, B> {
  protected getter: (a: A) => B
  protected setter: (value: B, obj: A) => A

  constructor(getter: (a: A) => B, setter: (value: B, obj: A) => A) {
    this.getter = getter
    this.setter = setter
  }

  public view(obj: A): B {
    return this.getter(obj)
  }

  public updateAt(f: (value: B) => B, obj: A): A {
    const { getter, setter } = this

    const value = getter(obj)
    const newValue = f(value)

    return setter(newValue, obj)
  }
}
