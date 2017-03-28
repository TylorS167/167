import * as assert from 'assert'

import { reduceBy } from './reduceBy'

type Student =
  {
    readonly name: string,
    readonly score: number,
  }

const array: Array<Student> =
  [
    { name: 'John', score: 85 },
    { name: 'Jane', score: 93 },
    { name: 'Abby', score: 95 },
    { name: 'Jack', score: 75 },
  ]

describe('reduceBy', () => {
  describe('(b -> a -> b) -> b -> (a -> string) -> [a]', () => {
    it('-> { string: b }', () => {
      const reduceToNamesBy = reduceBy<Student, Array<string>>((acc, student) => acc.concat(student.name), [])
      const namesByGrade = reduceToNamesBy((student) => {
        const score = student.score

        return score < 65 ? 'F' :
          score < 70 ? 'D' :
            score < 80 ? 'C' :
              score < 90 ? 'B' : 'A'
      })

      const expected = {
        A: [ 'Jane', 'Abby' ],
        B: [ 'John' ],
        C: [ 'Jack' ],
      }

      assert.deepEqual(namesByGrade(array), expected)
    })
  })
})
