import { curry2, curry3, pipe } from '../../categories/function'

import { Arity1 } from '../../'

export interface Future<A, B> {
  readonly fork: (failure: (value: A) => any, success: (value: B) => any) => void
}

export namespace Future {
  export const toPromise = <A>({ fork }: Future<any, A>): Promise<A> =>
    new Promise((resolve, reject) => fork(reject, resolve))

  export const of = <A, B = any>(value: A): Future<B, A> => ({ fork: forkOf<A>(value) })

  export const reject = <A, B = any>(value: A): Future<A, B> => ({ fork: forkReject(value) })

  export const chain: FutureChain = curry2(function<A, B, C>(
    f: (value: A) => Future<A, C>,
    future: Future<A, B>
  ): Future<A, C> {
    const fork = (failure: Arity1<A, any>, success: Arity1<C, any>) =>
      future.fork(failure, pipe(f, success))

    return { fork }
  })

  export const chainLeft: FutureChainLeft = curry2(function<A, B, C>(
    f: (value: A) => C,
    future: Future<A, B>
  ): Future<C, B> {
    const fork = (failure: Arity1<C, any>, success: Arity1<B, any>) =>
      future.fork(pipe(f, failure), success)

    return { fork }
  })

  export const map: FutureMap = curry2(function<A, B, C>(
    f: (value: B) => C,
    future: Future<A, B>
  ): Future<A, C> {
    return chain(pipe(f, Future.of), future)
  })

  export const mapLeft: FutureMapLeft = curry2(function<A, B, C>(
    f: (value: A) => C,
    future: Future<A, B>
  ): Future<C, B> {
    return chainLeft(pipe(f, Future.reject), future)
  })

  export const ap: FutureAP = curry2(function<A, B, C>(
    fn: Future<A, (value: B) => C>,
    value: Future<A, B>
  ): Future<A, C> {
    return chain(f => map(f, value), fn)
  })

  export const fork: FutureFork = curry3(function<A, B>(
    failure: (value: A) => any,
    success: (value: B) => any,
    future: Future<A, B>
  ): void {
    return future.fork(failure, success)
  })

  export function isFuture<A, B>(future: any): future is Future<A, B> {
    if (!future || typeof future !== 'object') return false

    const { fork } = future

    return typeof fork === 'function' && fork.length === 2
  }

  export const combine: FutureCombine = curry3(function<A, B, C, D>(
    f: (b: B, c: C) => D,
    futureAB: Future<A, B>,
    futureAC: Future<A, C>
  ): Future<A, D> {
    const fork = (failure: Arity1<A, any>, success: Arity1<D, any>) =>
      futureAB.fork(failure, b => futureAC.fork(failure, c => success(f(b, c))))

    return { fork }
  })

  export const combineArray: FutureCombineArray = curry2(function<A>(
    f: (...args: Array<any>) => A,
    futures: ReadonlyArray<Future<any, any>>
  ): Future<any, A> {
    const fork = (failure: Arity1<any, any>, success: Arity1<A, any>) =>
      Promise.all(futures.map(toPromise)).then(pipe(f, success), failure)

    return { fork }
  })
}

function forkOf<A>(value: A) {
  return function(_: any, success: Arity1<A, any>): void {
    success(value)
  }
}

function forkReject<A>(value: A) {
  return function(failure: Arity1<A, any>) {
    failure(value)
  }
}

export interface FutureChain {
  <A, B, C>(f: (value: B) => Future<A, C>, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: (value: B) => Future<A, C>): (future: Future<A, B>) => Future<A, C>
}

export interface FutureChainLeft {
  <A, B, C>(f: (value: A) => Future<C, B>, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: (value: A) => Future<C, B>): (future: Future<A, B>) => Future<C, B>
}

export interface FutureMap {
  <A, B, C>(f: (value: B) => C, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: (value: B) => C): (future: Future<A, B>) => Future<A, C>
}

export interface FutureMapLeft {
  <A, B, C>(f: (value: A) => C, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: (value: A) => C): (future: Future<A, B>) => Future<C, B>
}

export interface FutureAP {
  <A, B, C>(fn: Future<A, (value: B) => C>, future: Future<A, B>): Future<A, C>
  <A, B, C>(fn: Future<A, (value: B) => C>): (future: Future<A, B>) => Future<A, C>
}

export interface FutureFork {
  <A, B>(failure: (value: A) => any, success: (value: B) => any, future: Future<A, B>): void
  <A, B>(failure: (value: A) => any): (success: (value: B) => any, future: Future<A, B>) => void
  <A, B>(failure: (value: A) => any, success: (value: B) => any): (future: Future<A, B>) => void
  <A, B>(failure: (value: A) => any): (success: (value: B) => any) => (future: Future<A, B>) => void
}

export interface FutureCombine {
  <A, B, C, D>(f: (b: B, c: C) => D, futureAB: Future<A, B>, futureAC: Future<A, C>): Future<A, D>
  <A, B, C, D>(f: (b: B, c: C) => D): (
    futureAB: Future<A, B>,
    futureAC: Future<A, C>
  ) => Future<A, D>
  <A, B, C, D>(f: (b: B, c: C) => D): (
    futureAB: Future<A, B>
  ) => (futureAC: Future<A, C>) => Future<A, D>
  <A, B, C, D>(f: (b: B, c: C) => D, futureAB: Future<A, B>): (
    futureAC: Future<A, C>
  ) => Future<A, D>
}

export interface FutureCombineArray {
  <Err, A, Z>(f: (a: A) => Z, futures: [Future<Err, A>]): Future<Err, Z>
  <Err, A, B, Z>(f: (a: A, b: B) => Z, futures: [Future<Err, A>, Future<Err, B>]): Future<Err, Z>
  <Err, A, B, C, Z>(
    f: (a: A, b: B, c: C) => Z,
    futures: [Future<Err, A>, Future<Err, B>, Future<Err, C>]
  ): Future<Err, Z>
  <Err, A, B, C, D, Z>(
    f: (a: A, b: B, c: C, d: D) => Z,
    futures: [Future<Err, A>, Future<Err, B>, Future<Err, C>, Future<Err, D>]
  ): Future<Err, Z>
  <Err, A, B, C, D, E, Z>(
    f: (a: A, b: B, c: C, d: D, e: E) => Z,
    futures: [Future<Err, A>, Future<Err, B>, Future<Err, C>, Future<Err, D>, Future<Err, E>]
  ): Future<Err, Z>
  <Err, A, B, C, D, E, F, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F) => Z,
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>
    ]
  ): Future<Err, Z>
  <Err, A, B, C, D, E, F, G, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => Z,
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>
    ]
  ): Future<Err, Z>
  <Err, A, B, C, D, E, F, G, H, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => Z,
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>,
      Future<Err, H>
    ]
  ): Future<Err, Z>
  <Err, A, B, C, D, E, F, G, H, I, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => Z,
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>,
      Future<Err, H>,
      Future<Err, I>
    ]
  ): Future<Err, Z>
  <Err, A, B, C, D, E, F, G, H, I, J, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => Z,
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>,
      Future<Err, H>,
      Future<Err, I>,
      Future<Err, J>
    ]
  ): Future<Err, Z>

  <Err, A, Z>(f: (a: A) => Z): (futures: [Future<Err, A>]) => Future<Err, Z>
  <Err, A, B, Z>(f: (a: A, b: B) => Z): (
    futures: [Future<Err, A>, Future<Err, B>]
  ) => Future<Err, Z>
  <Err, A, B, C, Z>(f: (a: A, b: B, c: C) => Z): (
    futures: [Future<Err, A>, Future<Err, B>, Future<Err, C>]
  ) => Future<Err, Z>
  <Err, A, B, C, D, Z>(f: (a: A, b: B, c: C, d: D) => Z): (
    futures: [Future<Err, A>, Future<Err, B>, Future<Err, C>, Future<Err, D>]
  ) => Future<Err, Z>
  <Err, A, B, C, D, E, Z>(f: (a: A, b: B, c: C, d: D, e: E) => Z): (
    futures: [Future<Err, A>, Future<Err, B>, Future<Err, C>, Future<Err, D>, Future<Err, E>]
  ) => Future<Err, Z>
  <Err, A, B, C, D, E, F, Z>(f: (a: A, b: B, c: C, d: D, e: E, f: F) => Z): (
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>
    ]
  ) => Future<Err, Z>
  <Err, A, B, C, D, E, F, G, Z>(f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => Z): (
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>
    ]
  ) => Future<Err, Z>
  <Err, A, B, C, D, E, F, G, H, Z>(f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => Z): (
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>,
      Future<Err, H>
    ]
  ) => Future<Err, Z>
  <Err, A, B, C, D, E, F, G, H, I, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => Z
  ): (
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>,
      Future<Err, H>,
      Future<Err, I>
    ]
  ) => Future<Err, Z>
  <Err, A, B, C, D, E, F, G, H, I, J, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => Z
  ): (
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>,
      Future<Err, H>,
      Future<Err, I>,
      Future<Err, J>
    ]
  ) => Future<Err, Z>

  <Err, A>(f: (...args: Array<any>) => A, futures: Array<Future<Err, any>>): Future<Err, A>
  <Err, A>(f: (...args: Array<any>) => A, futures: ArrayLike<Future<Err, any>>): Future<Err, A>
  <Err, A>(f: (...args: Array<any>) => A, futures: ReadonlyArray<Future<Err, any>>): Future<Err, A>

  <Err, A>(f: (...args: Array<any>) => A): (futures: Array<Future<Err, any>>) => Future<Err, A>
  <Err, A>(f: (...args: Array<any>) => A): (futures: ArrayLike<Future<Err, any>>) => Future<Err, A>
  <Err, A>(f: (...args: Array<any>) => A): (
    futures: ReadonlyArray<Future<Err, any>>
  ) => Future<Err, A>
}
