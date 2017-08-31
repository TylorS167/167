import { Test, describe, given, it } from '@typed/test'

import { Future } from './Future'

export const test: Test = describe(`Future`, [
  describe(`Future.of`, [
    given(`a value`, [
      it(`returns a Future that resolves with value`, ({ equal }) => {
        const value = { a: 1 }
        const future = Future.of(value)

        return Future.toPromise(future).then(equal(value))
      }),
    ]),
  ]),

  describe(`Future.reject`, [
    given(`a value`, [
      it(`returns a Future that rejects with value`, ({ equal }) => {
        const value = { a: 1 }
        const future = Future.reject(value)

        return Future.toPromise(future).then(throwError, equal(value))
      }),
    ]),
  ]),

  describe(`Future.chain`, [
    given(`(a -> Future a c) and Future a b`, [
      it(`returns Future a c`, ({ equal }, done) => {
        const leftValue = new Error('foo')
        const rightValue = 2

        const left: Future<Error, number> = Future.reject(leftValue)
        const right: Future<Error, number> = Future.of(rightValue)

        let called = 0

        function makeAssertions(value: number) {
          equal(0, called)
          equal(rightValue, value)

          return Future.of(value)
        }

        Future.chain(makeAssertions, left).fork(
          () => Future.chain(makeAssertions, right).fork(done, () => done()),
          () => done(new Error('Should not be called'))
        )
      }),
    ]),
  ]),
])

function throwError() {
  throw new Error('Should not be called')
}
