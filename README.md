# 167 -- 0.37.0

Type-safe functional utilities

## Get it
```sh
yarn add 167
# or
npm install --save 167
```

## API Documentation

All functions are curried!

#### Arity0

<p>



</p>


```typescript

export type Arity0<A> = () => A

```


#### Arity1

<p>



</p>


```typescript

export type Arity1<A, B> = (a: A) => B

```


#### Arity10

<p>



</p>


```typescript

export type Arity10<A, B, C, D, E, F, G, H, I, J, K> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I,
  j: J
) => K

```


#### Arity10N

<p>



</p>


```typescript

export type Arity10N<A, B, C, D, E, F, G, H, I, J, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I,
  j: J,
  ...args: Array<any>
) => R

```


#### Arity1Bound

<p>



</p>


```typescript

export type Arity1Bound<that, A, B> = (this: that, a: A) => B

```


#### Arity1N

<p>



</p>


```typescript

export type Arity1N<A, R> = (a: A, ...args: Array<any>) => R

```


#### Arity2

<p>



</p>


```typescript

export type Arity2<A, B, C> = (a: A, b: B) => C

```


#### Arity2Bound

<p>



</p>


```typescript

export type Arity2Bound<that, A, B, C> = (this: that, a: A, b: B) => C

```


#### Arity2N

<p>



</p>


```typescript

export type Arity2N<A, B, R> = (a: A, b: B, ...args: Array<any>) => R

```


#### Arity3

<p>



</p>


```typescript

export type Arity3<A, B, C, D> = (a: A, b: B, c: C) => D

```


#### Arity3Bound

<p>



</p>


```typescript

export type Arity3Bound<that, A, B, C, D> = (this: that, a: A, b: B, c: C) => D

```


#### Arity3N

<p>



</p>


```typescript

export type Arity3N<A, B, C, R> = (a: A, b: B, c: C, ...args: Array<any>) => R

```


#### Arity4

<p>



</p>


```typescript

export type Arity4<A, B, C, D, E> = (a: A, b: B, c: C, d: D) => E

```


#### Arity4Bound

<p>



</p>


```typescript

export type Arity4Bound<that, A, B, C, D, E> = (this: that, a: A, b: B, c: C, d: D) => E

```


#### Arity4N

<p>



</p>


```typescript

export type Arity4N<A, B, C, D, R> = (a: A, b: B, c: C, d: D, ...args: Array<any>) => R

```


#### Arity5

<p>



</p>


```typescript

export type Arity5<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E) => F

```


#### Arity5Bound

<p>



</p>


```typescript

export type Arity5Bound<that, A, B, C, D, E, F> = (this: that, a: A, b: B, c: C, d: D, e: E) => F

```


#### Arity5N

<p>



</p>


```typescript

export type Arity5N<A, B, C, D, E, R> = (a: A, b: B, c: C, d: D, e: E, ...args: Array<any>) => R

```


#### Arity6

<p>



</p>


```typescript

export type Arity6<A, B, C, D, E, F, G> = (a: A, b: B, c: C, d: D, e: E, f: F) => G

```


#### Arity6N

<p>



</p>


```typescript

export type Arity6N<A, B, C, D, E, F, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  ...args: Array<any>
) => R

```


#### Arity7

<p>



</p>


```typescript

export type Arity7<A, B, C, D, E, F, G, H> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H

```


#### Arity7N

<p>



</p>


```typescript

export type Arity7N<A, B, C, D, E, F, G, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  ...args: Array<any>
) => R

```


#### Arity8

<p>



</p>


```typescript

export type Arity8<A, B, C, D, E, F, G, H, I> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H
) => I

```


#### Arity8N

<p>



</p>


```typescript

export type Arity8N<A, B, C, D, E, F, G, H, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  ...args: Array<any>
) => R

```


#### Arity9

<p>



</p>


```typescript

export type Arity9<A, B, C, D, E, F, G, H, I, J> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I
) => J

```


#### Arity9N

<p>



</p>


```typescript

export type Arity9N<A, B, C, D, E, F, G, H, I, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I,
  ...args: Array<any>
) => R

```


#### ArityN

<p>



</p>


```typescript

export type ArityN<R> = (...args: Array<any>) => R

```


#### Comparator

<p>



</p>


```typescript

export type Comparator<A> = (a: A, b: A) => ComparisonNumbers

```


#### ComparisonNumber

<p>



</p>


```typescript

export type ComparisonNumbers = -1 | 0 | 1

```


#### Curry10

<p>



</p>


```typescript

export type Curry10<A, B, C, D, E, F, G, H, I, J, K> = {
  (a: A): Curry9<B, C, D, E, F, G, H, I, J, K>
  (a: A, b: B): Curry8<C, D, E, F, G, H, I, J, K>
  (a: A, b: B, c: C): Curry7<D, E, F, G, H, I, J, K>
  (a: A, b: B, c: C, d: D): Curry6<E, F, G, H, I, J, K>
  (a: A, b: B, c: C, d: D, e: E): Curry5<F, G, H, I, J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry4<G, H, I, J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Curry3<H, I, J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): Curry2<I, J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): Arity1<J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J): K
}

```


#### Curry2

<p>



</p>


```typescript

export type Curry2<A, B, C> = {
  (a: A): Arity1<B, C>
  (a: A, b: B): C
}

```


#### Curry3

<p>



</p>


```typescript

export type Curry3<A, B, C, D> = {
  (a: A): Curry2<B, C, D>
  (a: A, b: B): Arity1<C, D>
  (a: A, b: B, c: C): D
}

```


#### Curry4

<p>



</p>


```typescript

export type Curry4<A, B, C, D, E> = {
  (a: A): Curry3<B, C, D, E>
  (a: A, b: B): Curry2<C, D, E>
  (a: A, b: B, c: C): Arity1<D, E>
  (a: A, b: B, c: C, d: D): E
}

```


#### Curry5

<p>



</p>


```typescript

export type Curry5<A, B, C, D, E, F> = {
  (a: A): Curry4<B, C, D, E, F>
  (a: A, b: B): Curry3<C, D, E, F>
  (a: A, b: B, c: C): Curry2<D, E, F>
  (a: A, b: B, c: C, d: D): Arity1<E, F>
  (a: A, b: B, c: C, d: D, e: E): F
}

```


#### Curry6

<p>



</p>


```typescript

export type Curry6<A, B, C, D, E, F, G> = {
  (a: A): Curry5<B, C, D, E, F, G>
  (a: A, b: B): Curry4<C, D, E, F, G>
  (a: A, b: B, c: C): Curry3<D, E, F, G>
  (a: A, b: B, c: C, d: D): Curry2<E, F, G>
  (a: A, b: B, c: C, d: D, e: E): Arity1<F, G>
  (a: A, b: B, c: C, d: D, e: E, f: F): G
}

```


#### Curry7

<p>



</p>


```typescript

export type Curry7<A, B, C, D, E, F, G, H> = {
  (a: A): Curry6<B, C, D, E, F, G, H>
  (a: A, b: B): Curry5<C, D, E, F, G, H>
  (a: A, b: B, c: C): Curry4<D, E, F, G, H>
  (a: A, b: B, c: C, d: D): Curry3<E, F, G, H>
  (a: A, b: B, c: C, d: D, e: E): Curry2<F, G, H>
  (a: A, b: B, c: C, d: D, e: E, f: F): Arity1<G, H>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): H
}

```


#### Curry8

<p>



</p>


```typescript

export type Curry8<A, B, C, D, E, F, G, H, I> = {
  (a: A): Curry7<B, C, D, E, F, G, H, I>
  (a: A, b: B): Curry6<C, D, E, F, G, H, I>
  (a: A, b: B, c: C): Curry5<D, E, F, G, H, I>
  (a: A, b: B, c: C, d: D): Curry4<E, F, G, H, I>
  (a: A, b: B, c: C, d: D, e: E): Curry3<F, G, H, I>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry2<G, H, I>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Arity1<H, I>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): I
}

```


#### Curry9

<p>



</p>


```typescript

export type Curry9<A, B, C, D, E, F, G, H, I, J> = {
  (a: A): Curry8<B, C, D, E, F, G, H, I, J>
  (a: A, b: B): Curry7<C, D, E, F, G, H, I, J>
  (a: A, b: B, c: C): Curry6<D, E, F, G, H, I, J>
  (a: A, b: B, c: C, d: D): Curry5<E, F, G, H, I, J>
  (a: A, b: B, c: C, d: D, e: E): Curry4<F, G, H, I, J>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry3<G, H, I, J>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Curry2<H, I, J>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): Arity1<I, J>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): J
}

```


#### Either

<p>

Either data structure and functions. See [@typed/either](https://github.com/TylorS/typed)

</p>


```typescript

export { Either, Left, Right, isLeft, isRight, fromLeft, fromRight } from '@typed/either'

```


#### Equality

<p>



</p>


```typescript

export type Equality = {
  <A>(a: A, b: A): boolean
  <A>(a: A): (b: A) => boolean
}

```


#### Future\<A, B\>

<p>

Future data structure and functions. See [@typed/future](https://github.com/TylorS/typed)

</p>


```typescript

export { Future, fork, sequence, all, toPromise } from '@typed/Future'

```


#### Index

<p>

Type-alias available to represent indexes

</p>


```typescript

export type Index = number

```


#### Lens

<p>

A common interface for Updating objects

</p>


```typescript

export interface Lens<A, B> {
  readonly view: (object: A) => Maybe<B>
  readonly updateAt: LensUpdateAt<A, B>
}

export type LensUpdateAt<A, B> = {
  (f: (previousValue: Maybe<B>) => Maybe<B>, object: A): A
  (f: (previousValue: Maybe<B>) => Maybe<B>): (object: A) => A
}

```


#### List

<p>

An immutable List type.

</p>


```typescript

export interface List<A> {
  readonly [key: number]: A
  readonly length: number
}

```


#### Maybe

<p>

Maybe data structure and functions. See [@typed/maybe](https://github.com/TylorS/typed)

</p>


```typescript

export { Maybe, Just, Nothing, isJust, isNothing, fromJust, fromMaybe, toMaybe } from '@typed/maybe'

```


#### Predicate

<p>



</p>


```typescript

export type Predicate<A> = (a: A) => boolean

```


#### Predicate2

<p>



</p>


```typescript

export type Predicate2<A> = (a: A, b: A) => boolean

```


#### StrMap

<p>

A StrMap type. Works as a readonly object.

</p>


```typescript

export type StrMap<A extends string, B> = Readonly<Record<A, B>>

```


#### Tuple

<p>



</p>


```typescript

export type Tuple<A, B> = [A, B]

```


#### Tuple3

<p>



</p>


```typescript

export type Tuple3<A, B, C> = [A, B, C]

```


#### __

<p>

A placeholder for `partial`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const __: PlaceHolder = { '@@placeholder': true }

const isPlaceholder = (x: any): x is PlaceHolder => x['@@placeholder'] === true

```

</details>
<hr />


#### add(x: number, y: number): number

<p>

Add 2 numbers together

</p>


<details>
<summary>See the code</summary>

```typescript

export const add = curry2(__add)

function __add(x: number, y: number): number {
  return x + y
}

```

</details>
<hr />


#### always\<A\>(a: A): (...args: Array\<any\>) =\> A

<p>

Given a value returns a function that will always return that value.

</p>


<details>
<summary>See the code</summary>

```typescript

export function always<A>(a: A) {
  function constant(...args: Array<any>): A
  function constant(): A {
    return a
  }

  return constant
}

```

</details>
<hr />


#### and\<A\>(predicate1: Predicate\<A\>, predicate2: Predicate\<A\>, value: A): boolean

<p>

Applies `&&` between two predicate functions.

</p>


<details>
<summary>See the code</summary>

```typescript

export const and: And = curry3(__and)

export type And = {
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>): Predicate<A>
  <A>(predicate1: Predicate<A>): {
    (predicate2: Predicate<A>, value: A): boolean
    (predicate2: Predicate<A>): Predicate<A>
  }
}

function __and<A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean {
  return predicate1(value) && predicate2(value)
}

```

</details>
<hr />


#### apply\<A\>(list: List\<any\>, fn: (...args: Array\<any\>) =\> A): A

<p>

Given a list of arguments and a function, applies the function with 
the given arguments.

</p>


<details>
<summary>See the code</summary>

```typescript

export const apply: Apply = function<A>(list: List<any>, f?: (...args: Array<any>) => A) {
  if (!f) return (f: (...args: Array<any>) => A) => __apply(list, f)

  return __apply(list, f)
}

function __apply<A>(list: List<any>, f: (...args: Array<any>) => A) {
  switch (list.length) {
    case 0:
      return f()
    case 1:
      return f(list[0])
    case 2:
      return f(list[0], list[1])
    case 3:
      return f(list[0], list[1], list[2])
    case 4:
      return f(list[0], list[1], list[2], list[3])
    case 5:
      return f(list[0], list[1], list[2], list[3], list[4])
    default:
      return f.apply(null, list)
  }
}

```

</details>
<hr />


#### clone\<A\>(obj: A): A

<p>

Returns a deep clone of a value.

</p>


<details>
<summary>See the code</summary>

```typescript

export function clone<A>(obj: A): A {
  return _clone(obj, [], [], true)
}

function _clone(value: any, refFrom: Array<any>, refTo: Array<any>, deep: boolean): any {
  function copy(copiedValue: any) {
    const length = refFrom.length
    let i = 0

    for (; i < length; ++i) if (value === refFrom[i]) return refTo[i]

    refFrom[i + 1] = value
    refTo[i + 1] = copiedValue

    for (const key in value) {
      if (!value.hasOwnProperty(key)) continue

      copiedValue[key] = deep ? _clone(value[key] as any, refFrom, refTo, true) : value[key]
    }

    return copiedValue
  }

  switch (typeOf(value)) {
    case 'Object':
      return copy({})
    case 'Array':
      return copy([])
    case 'Date':
      return new Date(value.valueOf())
    case 'RegExp':
      return cloneRegexp(value)
    default:
      return value
  }
}

function cloneRegexp(pattern: RegExp): RegExp {
  return new RegExp(
    pattern.source,
    (pattern.global ? 'g' : '') +
      (pattern.ignoreCase ? 'i' : '') +
      (pattern.multiline ? 'm' : '') +
      (pattern.sticky ? 'y' : '') +
      (pattern.unicode ? 'u' : '')
  )
}

```

</details>
<hr />


#### concat\<A\>(list1: List\<A\>, list2: List\<B\>): List\<B\>

<p>

Returns the result of concatenating the given lists or strings.

</p>


<details>
<summary>See the code</summary>

```typescript

export const concat: Concat = curry2(function<A>(list1: List<A>, list2: List<A>): List<A> {
  const length1 = list1.length
  const length2 = list2.length
  const newList = Array(length1 + length2)

  for (let i = 0; i < length1; ++i) newList[i] = list1[i]

  for (let i = 0; i < length2; ++i) newList[i + length1] = list2[i]

  return newList
})

```

</details>
<hr />


#### curry(fn: Fuction): CurriedFunction

<p>

Given a function it returns a curried version of that function.

</p>


<details>
<summary>See the code</summary>

```typescript

export const curry: CurryFn = function curry(fn: any) {
  switch (fn.length) {
    case 0:
      return fn
    case 1:
      return fn
    case 2:
      return curry2(fn as Curry2<any, any, any>)
    case 3:
      return curry3(fn as Curry3<any, any, any, any>)
    case 4:
      return curry4(fn as Curry4<any, any, any, any, any>)
    case 5:
      return curry5(fn as Curry5<any, any, any, any, any, any>)
    default:
      return curryN(fn.length, fn)
  }
}

export type CurryFn = {
  <A>(f: () => A): () => A
  <A, B>(f: Arity1<A, B>): Arity1<A, B>
  <A, B, C>(f: Arity2<A, B, C>): Curry2<A, B, C>
  <A, B, C, D>(f: Arity3<A, B, C, D>): Curry3<A, B, C, D>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>): Curry4<A, B, C, D, E>
  <A, B, C, D, E, F>(f: Arity5<A, B, C, D, E, F>): Curry5<A, B, C, D, E, F>
  <A, B, C, D, E, F, G>(f: Arity6<A, B, C, D, E, F, G>): Curry6<A, B, C, D, E, F, G>
  <A, B, C, D, E, F, G, H>(f: Arity7<A, B, C, D, E, F, G, H>): Curry7<A, B, C, D, E, F, G, H>
  <A, B, C, D, E, F, G, H, I>(f: Arity8<A, B, C, D, E, F, G, H, I>): Curry8<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I
  >
  <A, B, C, D, E, F, G, H, I, J>(f: Arity9<A, B, C, D, E, F, G, H, I, J>): Curry9<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J
  >
  <A, B, C, D, E, F, G, H, I, J, K>(f: Arity10<A, B, C, D, E, F, G, H, I, J, K>): Curry10<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K
  >
}

```

</details>
<hr />


#### curryN(arity: number, f: Function): CurriedFunction

<p>

Curries a function to `n` arity.

</p>


<details>
<summary>See the code</summary>

```typescript

export const curryN: CurryNFn = curriedN(
  2,
  (arity: number, f: ArityN<any>) => curriedN(arity, f, []),
  []
)

function curriedN(arity: number, f: ArityN<any>, previousArgs: Array<any>): ArityN<any> {
  if (arity <= 1) return f

  return function(...args: Array<any>) {
    const concatArgs = previousArgs.concat(args)

    if (concatArgs.length >= arity) return apply(concatArgs, f)

    return curriedN(arity, f, concatArgs)
  }
}

```

</details>
<hr />


#### divide(x: number, y: number): number

<p>

Divides 2 numbers

</p>


<details>
<summary>See the code</summary>

```typescript

export const divide = curry2(__divide)

function __divide(x: number, y: number): number {
  return x / y
}

```

</details>
<hr />


#### endsWith(search: string, str: string): boolean

<p>

Curried function to call `String.prototype.endsWith`

</p>


<details>
<summary>See the code</summary>

```typescript

export const endsWith = invoker(1, 'endsWith')

```

</details>
<hr />


#### endsWith(startIndex: number, endIndex: number | void, str: string): boolean

<p>

Curried function to call `String.prototype.substring`

</p>


<details>
<summary>See the code</summary>

```typescript

export const substring = invoker(2, 'substring')

```

</details>
<hr />


#### equals\<A\>(a: A, b: A): boolean

<p>

Checks if two values are equal.

</p>


<details>
<summary>See the code</summary>

```typescript

export const equals: Equals = curry2(function equals<A>(x: A, y: A): boolean {
  return isEqual(x, y, [], [])
})

function isEqual(a: any, b: any, stackA: Array<any>, stackB: Array<any>): boolean {
  if (a === b) return true

  if (typeOf(a) !== typeOf(b)) return false

  // tslint:disable-next-line
  if (a == null || b == null) return false

  switch (typeOf(a)) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && functionName(a.constructor) === 'Promise')
        return a === b
      break
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && a.valueOf() === b.valueOf())) return false
      break
    case 'Date':
      if (a.valueOf() !== b.valueOf()) return false

      break
    case 'Error':
      return a.name === b.name && a.message === b.message
    case 'RegExp':
      if (
        !(
          a.source === b.source &&
          a.global === b.global &&
          a.ignoreCase === b.ignoreCase &&
          a.multiline === b.multiline &&
          a.sticky === b.sticky &&
          a.unicode === b.unicode
        )
      ) {
        return false
      }
      break
    case 'Map':
    case 'Set':
      if (!isEqual(Array.from(a.entries()), Array.from(b.entries()), stackA, stackB)) return false
      break
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      break
    case 'ArrayBuffer':
      break
    default:
      // Values of other types are only equal if identical.
      return false
  }

  const keysA = Object.keys(a)

  if (keysA.length !== Object.keys(b).length) return false

  let idx = stackA.length - 1

  while (idx >= 0) {
    if (stackA[idx] === a) return stackB[idx] === b

    idx -= 1
  }

  stackA.push(a)
  stackB.push(b)
  idx = keysA.length - 1

  while (idx >= 0) {
    const key = keysA[idx]

    if (!(Object.prototype.hasOwnProperty.call(b, key) && isEqual(b[key], a[key], stackA, stackB)))
      return false

    idx -= 1
  }

  stackA.pop()
  stackB.pop()

  return true
}

```

</details>
<hr />


#### filter\<A\>(predicate: (value: A, index: number) =\> boolean, list: List\<A\>): List\<A\>

<p>

Takes a predicate and a "filterable", and returns a new filterable of the
same type containing the members of the given filterable which satisfy the
given predicate.
Dispatches to the filter method of the second argument, if present.

</p>


<details>
<summary>See the code</summary>

```typescript

export const filter: Filter = curry2(function filter<A>(
  predicate: (a: A, index: number) => boolean,
  list: List<A>
): List<A> {
  const length = list.length
  const newList = []

  for (let i = 0; i < length; ++i) if (predicate(list[i], i)) newList.push(list[i])

  return newList
})

```

</details>
<hr />


#### find\<A\>(predicate: Predicate\<A\>, list: List\<A\>): Maybe\<A\>

<p>

Find the value contained in a list.

</p>


<details>
<summary>See the code</summary>

```typescript

export const find: Find = curry2(__find)

export type Find = {
  <A>(predicate: (value: A) => boolean, list: List<A>): Maybe<A>
  <A>(predicate: (value: A) => boolean): (list: List<A>) => Maybe<A>
}

const propFlipped: <A>(list: List<A>) => (index: Index) => A = flip(prop)

function __find<A>(predicate: Predicate<A>, list: List<A>): Maybe<A> {
  return map(propFlipped(list), findIndex(predicate, list))
}

```

</details>
<hr />


#### findIndex\<A\>(predicate: Predicate\<A\>, list: List\<A\>): Maybe\<Index\>

<p>

Find the index of a value in a list.

</p>


<details>
<summary>See the code</summary>

```typescript

export const findIndex: FindIndex = curry2(__findIndex)

export type FindIndex = {
  <A>(predicate: (value: A) => boolean, list: List<A>): Maybe<Index>
  <A>(predicate: (value: A) => boolean): (list: List<A>) => Maybe<Index>
}

function __findIndex<A>(predicate: (value: A) => boolean, list: List<A>): Maybe<Index> {
  const itemCount = length(list)

  for (let i = 0; i < itemCount; ++i) if (predicate(list[i])) return Maybe.of(i)

  return Nothing
}

```

</details>
<hr />


#### functionName(fn: Function): string

<p>

Returns the name of a function.

</p>


<details>
<summary>See the code</summary>

```typescript

export function functionName(fn: Function): string {
  if (fn.name) return fn.name

  const [, name] = String(fn).match(FUNCTION_NAME_REGEX) || DEFAULT_MATCH

  return name
}

```

</details>
<hr />


#### greaterThan\<A\>(left: A, right: A): boolean

<p>

Applies `>` to 2 values. 

</p>


<details>
<summary>See the code</summary>

```typescript

export const greaterThan: GreaterThan = curry2(<A>(left: A, right: A) => left > right)

export type GreaterThan = {
  <A>(left: A, right: A): boolean
  <A>(left: A): (right: A) => boolean
}

```

</details>
<hr />


#### greaterThanOrEqual\<A\>(left: A, right: A): boolean

<p>

Applies `>=` to 2 values.

</p>


<details>
<summary>See the code</summary>

```typescript

export const greaterThanOrEqual: GreaterThanOrEqual = curry2(
  <A>(left: A, right: A) => left >= right
)

export type GreaterThanOrEqual = {
  <A>(left: A, right: A): boolean
  <A>(left: A): (right: A) => boolean
}

```

</details>
<hr />


#### hasOwnProperty\<A\>(key: PropertyKey, object: A): boolean

<p>

Given a property key and an object returns true if that object has a property
at the given property key.

</p>


<details>
<summary>See the code</summary>

```typescript

export const hasOwnProperty: HasOwnProperty = invoker<Object, PropertyKey, boolean>(
  1,
  'hasOwnProperty'
)

export type HasOwnProperty = {
  <O extends object>(key: PropertyKey, object: O): boolean
  <O extends object>(key: PropertyKey): (object: O) => boolean
  (key: PropertyKey): <O>(object: O) => boolean
}

```

</details>
<hr />


#### id\<A\>(value: A): A

<p>

Returns the value passed in

</p>


<details>
<summary>See the code</summary>

```typescript

export const id: Id = <A>(value: A): A => value

export type Id = {
  <A>(value: A, ...args: Array<any>): A
}

```

</details>
<hr />


#### ifElse\<A, B\>(predicate: Predicate\<A\>, thenF: Arity1\<A, B\>, elseF: Arity1\<A, B\>, value: A): B

<p>

Function for handling if/Else statements.

</p>


<details>
<summary>See the code</summary>

```typescript

export const ifElse: IfElseArity4 = curry4(__ifElse)

function __ifElse<A, B>(
  ifF: (value: A) => boolean,
  thenF: (value: A) => B,
  elseF: (value: A) => B,
  value: A
): B {
  return ifF(value) ? thenF(value) : elseF(value)
}

```

</details>
<hr />


#### includes(search: string, str: string): boolean

<p>

Curried function to call `String.prototype.includes`

</p>


<details>
<summary>See the code</summary>

```typescript

export const includes = invoker(1, 'includes')

```

</details>
<hr />


#### invoker\<O\>(arity: number, method: keyof O): (...args, object: O) =\> A

<p>

Turns a named method with a specified arity into a function that can be 
called directly supplied with arguments and a target object. The returned 
function is curried and accepts arity + 1 parameters where the final 
parameter is the target object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const invoker: InvokerFn = (curry2(<O, R>(arity: number, method: keyof O) =>
  curryN((arity + 1) as any, function(): R {
    const target = arguments[arity]

    return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity))
  })
) as any) as InvokerFn

```

</details>
<hr />


#### isArray\<A = any\>(x: any): x is Array\<A\>

<p>

Returns true if given value is an Array.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isArray<A = any>(x: any): x is Array<A> {
  return Array.isArray(x)
}

```

</details>
<hr />


#### isFuture\<A, B\>(x: any): x is Future\<A, B\>

<p>

Returns true if a value is a `Future`

</p>


<details>
<summary>See the code</summary>

```typescript

export function isFuture<A, B>(x: any): x is Future<A, B> {
  return x && typeof x.fork === 'function' && x.fork.length === 2
}

```

</details>
<hr />


#### isIterable\<A\>(x: any): x is Iterable\<A\>

<p>

Returns true if a value is an Iterable.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isIterable<A>(x: any): x is Iterable<A> {
  return x && typeof x[Symbol.iterator] === 'function' && isIterator(x[Symbol.iterator]())
}

```

</details>
<hr />


#### isIterator\<A\>(x: any): x is Iterator\<A\>

<p>

Returns true if value is an iterator.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isIterator<A>(x: any): x is Iterator<A> {
  return x && typeof (x as Iterator<A>).next === 'function'
}

```

</details>
<hr />


#### isList\<A = any\>(x: any): x is List\<A\>

<p>

Returns true if a value is a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isList<A = any>(x: any): x is List<A> {
  if (Array.isArray(x)) return true
  if (!x || typeof x !== 'object' || typeof x === 'string') return false
  if (x.nodeType === 1) return !!x.length
  if (x.length === 0) return true
  if (x.length > 0) return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1)
  return false
}

```

</details>
<hr />


#### isMap\<A = any, B = any\>(x: any): x is Map\<A, B\>

<p>

Returns true if a value is a `Map`.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isMap<A = any, B = any>(x: any): x is Map<A, B> {
  return (
    x && typeof (x as Map<A, B>).delete === 'function' && typeof (x as Map<A, B>).set === 'function'
  )
}

```

</details>
<hr />


#### isNull(x: any): x is null

<p>

Returns true if the value is null

</p>


<details>
<summary>See the code</summary>

```typescript

export function isNull(x: any): x is null {
  return x === null
}

```

</details>
<hr />


#### isNumber(x: any): x is number

<p>

Returns true if value is a number.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isNumber(x: any): x is number {
  return typeof x === 'number'
}

```

</details>
<hr />


#### isObject\<A extends object = Object\>(x: any): x is A

<p>

Returns true if a value is an object.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isObject<A extends object = Object>(x: any): x is A {
  return x && typeof x === 'object'
}

```

</details>
<hr />


#### isPromiseLike\<A = any\>(x: any): x is PromiseLike\<A\>

<p>

Returns true if a value is PromiseLike

</p>


<details>
<summary>See the code</summary>

```typescript

export function isPromiseLike<A = any>(x: any): x is PromiseLike<A> {
  return x && typeof x.then === 'function'
}

```

</details>
<hr />


#### isSet\<A = any\>(x: any): x is Set\<A\>

<p>

Returns true if a value is a Set.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isSet<A = any>(x: any): x is Set<A> {
  return x && typeof (x as Set<A>).delete === 'function' && typeof (x as Set<A>).add === 'function'
}

```

</details>
<hr />


#### isUndefined(x: any): x is undefined

<p>

Returns true if the value is undefined.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isUndefined(x: any): x is undefined {
  return x === void 0
}

```

</details>
<hr />


#### length\<A\>(obj: { length: A }): A

<p>

Returns the value of the property `length`

</p>


<details>
<summary>See the code</summary>

```typescript

export const length = prop('length')

```

</details>
<hr />


#### lens\<A, B\>(getter: (a: A) =\> B | void, setter: (value: B, a: A) =\> A): Lens\<A, B\>

<p>

Given a getter and a setter function,
it returns a Lens.

</p>


<details>
<summary>See the code</summary>

```typescript

export const lens: LensFn = curry2(__lens)

function __lens<A, B>(getter: (a: A) => B | void, setter: (value: B, a: A) => A): Lens<A, B> {
  function updateAt(f: (value: Maybe<B>) => Maybe<B>, a: A): A {
    const value = f(view(a))

    if (isNothing(value)) return a

    return setter(fromJust(value), a)
  }

  function view(a: A): Maybe<B> {
    return toMaybe(getter(a))
  }

  return { view, updateAt: curry2(updateAt) }
}

export type LensFn = {
  <A, B>(getter: (a: A) => B, setter: (value: B, a: A) => A): Lens<A, B>
  <A, B>(getter: (a: A) => B): (setter: (value: B, a: A) => A) => Lens<A, B>
}

```

</details>
<hr />


#### lensIndex\<A\>(index: number): Lens\<List\<A\>, A\>

<p>

Creates an index for a List.

</p>


<details>
<summary>See the code</summary>

```typescript

export function lensIndex<A>(index: number): Lens<List<A>, A> {
  return lens(prop(index), update(index))
}

```

</details>
<hr />


#### lensPath\<A, B\>(path: Array\<string\>): Lens\<A, B\>

<p>

Given a path to a value it returns a Lens that operates on that value.

</p>


<details>
<summary>See the code</summary>

```typescript

export const lensPath: LensPath = function(path: List<string>): Lens<any, any> {
  return apply(map(lensProp, path), pipeLenses)
}

```

</details>
<hr />


#### lensProp\<A, K extends keyof A\>(key: K): Lens\<A, A[K]\>

<p>

Creates a lens that operates on an object's property.

</p>


<details>
<summary>See the code</summary>

```typescript

export const lensProp = <A, K extends keyof A = keyof A>(key: K): Lens<A, A[K]> =>
  lens(prop(key), set(key))

```

</details>
<hr />


#### lessThan\<A\>(left: A, right: A): boolean

<p>

Compares two values using `<`

</p>


<details>
<summary>See the code</summary>

```typescript

export const lessThan: LessThan = curry2(<A>(left: A, right: A) => left < right)

export type LessThan = {
  <A>(left: A, right: A): boolean
  <A>(left: A): (right: A) => boolean
}

```

</details>
<hr />


#### lessThanOrEqual\<A\>(left: A, right: A): boolean

<p>

Compares 2 values using `<=`

</p>


<details>
<summary>See the code</summary>

```typescript

export const lessThanOrEqual: LessThanOrEqual = curry2(<A>(left: A, right: A) => left <= right)

export type LessThanOrEqual = {
  <A>(left: A, right: A): boolean
  <A>(left: A): (right: A) => boolean
}

```

</details>
<hr />


#### map\<A, B\>(f: (value: A, index: number) =\> B, list: List\<A\>): List\<B\>

<p>

Map over the value contained in a data structure.
Works for `List`, `Maybe`, `Either`, `Future` and `PromiseLike` data strctures.

</p>


<details>
<summary>See the code</summary>

```typescript

export const map: Map = curry2<any, any, any>(function map(f: (value: any) => any, list: any): any {
  if (isJust(list) || isNothing(list)) return maybeMap(f, list)
  if (isLeft(list) || isRight(list)) return eitherMap(f, list)
  if (isFuture(list)) return futureMap(f, list)
  if (isPromiseLike(list)) return Promise.resolve(list.then(f))

  return arrayMap(f, list)
})

function arrayMap<A, B>(f: (value: A, index: number) => B, list: List<A>): List<B> {
  const itemCount = length(list)
  const newList = Array(itemCount)

  for (let i = 0; i < itemCount; ++i) newList[i] = f(list[i], i)

  return newList
}

```

</details>
<hr />


#### modulo(x: number, y: number): number

<p>

Applies `%` to 2 numbers.

</p>


<details>
<summary>See the code</summary>

```typescript

export const modulo = curry2(__modulo)

function __modulo(x: number, y: number): number {
  return x % y
}

```

</details>
<hr />


#### multiply(x: number, y: number): number

<p>

Multiplies 2 numbers.

</p>


<details>
<summary>See the code</summary>

```typescript

export const multiply = curry2(__multiply)

function __multiply(x: number, y: number): number {
  return x * y
}

```

</details>
<hr />


#### negate(n: number): number

<p>

Negates a number.

</p>


<details>
<summary>See the code</summary>

```typescript

export const negate = (n: number): number => -n

```

</details>
<hr />


#### or\<A\>(predicate1: Predicate\<A\>, predicate2: Predicate\<A\>, value: A): boolean

<p>

Applies `||` between two predicate functions.

</p>


<details>
<summary>See the code</summary>

```typescript

export const or: Or = curry3(__or)

export type Or = {
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>): Predicate<A>
  <A>(predicate1: Predicate<A>): {
    (predicate2: Predicate<A>, value: A): boolean
    (predicate2: Predicate<A>): Predicate<A>
  }
}

function __or<A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean {
  return predicate1(value) || predicate2(value)
}

```

</details>
<hr />


#### partial(f: Function, args: List\<any\>): PartiallyAppliedFunction

<p>

Allows partially applying a function

</p>


<details>
<summary>See the code</summary>

```typescript

export const partial: PartialFn = curry2(
  (f: (...args: Array<any>) => any, args: Array<any>): any => {
    const fnLength = length(f) as number
    const argsLength = length(args)

    if (fnLength === 0) return f
    if (argsLength === 0) return curryN(fnLength as 2, f)

    const placeholderAmount = filter(isPlaceholder, args).length
    const expectedLength = Math.max(0, fnLength - argsLength) + placeholderAmount

    function partiallyApplied(...otherArgs: Array<any>) {
      if (placeholderAmount === 0) return apply(concat(args, otherArgs), f)

      const combinedArgs: Array<any> = Array(fnLength)

      for (let i = 0; i < combinedArgs.length; ++i)
        combinedArgs[i] = isPlaceholder(args[i]) ? otherArgs.shift() : args[i]

      return apply(concat(combinedArgs, otherArgs), f)
    }

    return curryN(expectedLength as 2, partiallyApplied)
  }
)

```

</details>
<hr />


#### path\<A, B\>(path: List\<string\>, obj: A): Maybe\<B\>

<p>

Given a path to a value it returns a Lens that operates on that value.

</p>


<details>
<summary>See the code</summary>

```typescript

export const path: Path = curry2(function(path: List<string>, obj: any): any {
  return lensPath<any, any>(path).view(obj)
})

```

</details>
<hr />


#### pipe\<A, B\>(...fns: Array\<Function\>): (value: A) =\> B

<p>

Left-to-right function composition.

</p>


<details>
<summary>See the code</summary>

```typescript

export const pipe: PipeFn = function pipe<A, B>(...fns: Array<Function>) {
  return function(a: A): B {
    switch (fns.length) {
      case 1:
        return fns[0](a)
      case 2:
        return fns[1](fns[0](a))
      case 3:
        return fns[2](fns[1](fns[0](a)))
      case 4:
        return fns[3](fns[2](fns[1](fns[0](a))))
      case 5:
        return fns[4](fns[3](fns[2](fns[1](fns[0](a)))))
      default:
        return reduce((accumulator: any, value: Function) => value(accumulator), a, fns)
    }
  }
}

```

</details>
<hr />


#### pipeLenses\<A, B\>(...lenses: Array\<Lens\<any, any\>\>): Lens\<A, B\>

<p>

Left-to-right composition of Lenses.

</p>


<details>
<summary>See the code</summary>

```typescript

export const pipeLenses: PipeLenses = function pipeLenses(
  ...lenses: Array<Lens<any, any>>
): Lens<any, any> {
  return reduce(__pipeLenses, lenses[0], lenses.slice(1))
}

function __pipeLenses<A, B, C>(lensAB: Lens<A, B>, lensBC: Lens<B, C>): Lens<A, C> {
  function view(obj: A): Maybe<C> {
    return chain(b => lensBC.view(b), lensAB.view(obj))
  }

  function updateAt(f: (value: Maybe<C>) => Maybe<C>, obj: A): A {
    const value = f(view(obj))

    const nestedObject = lensAB.view(obj)

    if (isNothing(nestedObject)) return obj

    return lensAB.updateAt(
      () => Maybe.of(lensBC.updateAt(() => value, fromJust(nestedObject))),
      obj
    )
  }

  return { view, updateAt: curry2(updateAt) }
}

```

</details>
<hr />


#### prop\<A, K extends keyof A = K\>(key: K, obj: A): A[K]

<p>

Returns the value of a property from an object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const prop: Prop = curry2(<A, K extends keyof A>(key: K, obj: A): A[K] => obj[key])

```

</details>
<hr />


#### propEq\<O, K extends keyof O\>(key: K, value: O[K], obj: O): boolean

<p>

Returns `true` if a given object's key value is equal to the given `value`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const propEq: PropEq = curry3(function<O, K extends keyof O>(
  key: K,
  value: O[K],
  obj: O
): boolean {
  return equals(obj[key], value)
})

```

</details>
<hr />


#### reduce\<A, B\>(f: (accumulator: B, value: A) =\> B, seed: B, list: List\<A\>): B

<p>

Fold over the values in an array-like object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const reduce: ReduceArity3 = curry3(function reduce<A, B>(
  f: (acc: B, value: A, index: number) => B,
  seed: B,
  list: List<A>
) {
  const length = list.length
  let acc: B = seed

  for (let i = 0; i < length; ++i) acc = f(acc, list[i], i)

  return acc
})

```

</details>
<hr />


#### reverse\<A\>(list: List\<A\>): List\<A\>

<p>

Reverses the order of values contained in a List.

</p>


<details>
<summary>See the code</summary>

```typescript

export const reverse: Reverse = function reverse<A>(list: List<A>): List<A> {
  const itemCount = length(list)
  const reversedList = Array(itemCount)

  for (let index = 0; index < itemCount; ++index) reversedList[index] = list[itemCount - 1 - index]

  return reversedList
}

```

</details>
<hr />


#### set\<Key extends string, A, O extends Record\<Key, A\>\>(key: Key, value: A, obj: O): O

<p>

Sets the property on an object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const set: SetArity3 = curry3(function __set<
  Key extends string,
  A,
  O extends { readonly: { [K in Key]: A } }
>(key: Key, value: A, obj: O): O {
  const clonedObj = clone(obj)
  ;(clonedObj as any)[key] = value

  return clonedObj
})

export type SetArity3 = {
  <A, O extends { readonly [key: number]: A }>(key: number, value: A, obj: O): O
  <Key extends string, A, O extends Readonly<Record<Key, A>>>(key: Key, value: A, obj: O): O

  <A>(key: number, value: A): <O extends { readonly [key: number]: A }>(obj: O) => O
  <Key extends string, A>(key: Key, value: A): SetArity1<Key, A>

  (key: number): SetArity2Number
  <Key extends string>(key: Key): SetArity2<Key>
}

export type SetArity2Number = {
  <A, O extends { readonly [key: number]: A }>(value: A, obj: O): O
  <A>(value: A): <O extends { readonly [key: number]: A }>(obj: O) => O
  <A, O extends { readonly [key: number]: A }>(value: A): (obj: O) => O
}

export type SetArity2<Key extends string> = {
  <A, O extends Readonly<Record<Key, A>>>(value: A, obj: O): O
  <A>(value: A): SetArity1<Key, A>
}

export type SetArity1<Key extends string, A> = {
  <O extends Readonly<Record<Key, A>>>(obj: O): O
}

```

</details>
<hr />


#### split(search: string | RegExp, str: string): List\<string\>

<p>

Curried function to call `String.prototype.split`

</p>


<details>
<summary>See the code</summary>

```typescript

export const split = invoker(1, 'split')

```

</details>
<hr />


#### startsWith(search: string, str: string): boolean

<p>

Curried function to call `String.prototype.startsWith`

</p>


<details>
<summary>See the code</summary>

```typescript

export const startsWith = invoker(1, 'startsWith')

```

</details>
<hr />


#### substr(startIndex: number, length: number | void, str: string): boolean

<p>

Curried function to call `String.prototype.substr`

</p>


<details>
<summary>See the code</summary>

```typescript

export const substr = invoker(2, 'substr')

```

</details>
<hr />


#### subtract(x: number, y: number): number

<p>

Subtracts one number from another.

</p>


<details>
<summary>See the code</summary>

```typescript

export const subtract = curry2(__subtract)

function __subtract(x: number, y: number): number {
  return x - y
}

```

</details>
<hr />


#### toLowerCase(str: string): string

<p>

Curried function to call `String.prototype.toLowerCase`

</p>


<details>
<summary>See the code</summary>

```typescript

export const toLowerCase = invoker(0, 'toLowerCase')

```

</details>
<hr />


#### toUpperCase(str: string): string

<p>

Curried function to call `String.prototype.toUpperCase`

</p>


<details>
<summary>See the code</summary>

```typescript

export const toUpperCase = invoker(0, 'toUpperCase')

```

</details>
<hr />


#### trim(str: string): string

<p>

Curried function to call `String.prototype.trim`

</p>


<details>
<summary>See the code</summary>

```typescript

export const trim = invoker(0, 'trim')

```

</details>
<hr />


#### tryCatch\<A\>(list: List\<any\>, fn: (...args: Array\<any\>) =\> A): Either\<Error, A\>

<p>

Given a list of arguments and a function, applies the function with 
the given arguments.

</p>


<details>
<summary>See the code</summary>

```typescript

export const tryCatch: TryCatch = curry2(function apply<A, Err = any>(
  list: List<any>,
  f: (...args: Array<any>) => A
): Either<Err, A> {
  switch (list.length) {
    case 0:
      return __catch(f)
    case 1:
      return __catch(() => f(list[0]))
    case 2:
      return __catch(() => f(list[0], list[1]))
    case 3:
      return __catch(() => f(list[0], list[1], list[2]))
    case 4:
      return __catch(() => f(list[0], list[1], list[2], list[3]))
    case 5:
      return __catch(() => f(list[0], list[1], list[2], list[3], list[4]))
    default:
      return __catch(() => f.apply(null, list))
  }
})

function __catch<A, Err = any>(f: () => A): Either<Err, A> {
  try {
    return Either.of(f())
  } catch (error) {
    return Either.left(error)
  }
}

```

</details>
<hr />


#### typeOf(value: any): string

<p>

Returns the type of a value.

</p>


<details>
<summary>See the code</summary>

```typescript

export function typeOf(value: string): 'String'
export function typeOf(value: number): 'Number'
export function typeOf(value: null): 'Null'
export function typeOf(value: void): 'Undefined'
export function typeOf(value: undefined): 'Undefined'
export function typeOf(value: any): string
export function typeOf(value: any): string {
  if (value === null) return 'Null'

  if (value === void 0) return `Undefined`

  return Object.prototype.toString.call(value).slice(8, -1)
}

```

</details>
<hr />


#### update\<A\>(index: number, value: A, list: Li)

<p>

Updates the value of an array

</p>


<details>
<summary>See the code</summary>

```typescript

export const update: UpdateArity3 = curry3(function update<A>(
  index: number,
  value: A,
  list: List<A>
): List<A> {
  const length = list.length
  const newList = arrayFrom(list)

  if (length === 0 || index < 0 || index >= length) return newList

  newList[index] = value

  return newList
})

```

</details>
<hr />


#### updateAt\<A, B\>(lens: \<A, B\>, f: (value: Maybe\<B\>) =\> Maybe\<B\>, obj: A): A

<p>

Uses a lenses to update a value contained in an object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const updateAt: UpdateAt = curry3(function<A, B>(
  lens: Lens<A, B>,
  f: (value: Maybe<B>) => Maybe<B>,
  obj: A
): A {
  return lens.updateAt(f, obj)
})

export type UpdateAt = {
  <A, B>(lens: Lens<A, B>, f: (value: Maybe<B>) => Maybe<B>, obj: A): A
  <A, B>(lens: Lens<A, B>, f: (value: Maybe<B>) => Maybe<B>): (obj: A) => A
  <A, B>(lens: Lens<A, B>): (f: (value: Maybe<B>) => Maybe<B>) => (obj: A) => A
  <A, B>(lens: Lens<A, B>): (f: (value: Maybe<B>) => Maybe<B>, obj: A) => A
}

```

</details>
<hr />


#### view\<A, B\>(lens: Lens\<A, B\>, obj: A): Maybe\<B\>

<p>

Uses a lenses to view a value contained in an object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const view: View = curry2(function<A, B>(lens: Lens<A, B>, obj: A): Maybe<B> {
  return lens.view(obj)
})

export type View = {
  <A, B>(lens: Lens<A, B>, obj: A): Maybe<B>
  <A, B>(lens: Lens<A, B>): (obj: A) => Maybe<B>
}

```

</details>
<hr />
