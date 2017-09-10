import { List } from '../types'
import { isIterator } from './isIterator'
import { isList } from './isList'

export function arrayFrom<A>(
  iterable: IterableIterator<A> | Iterable<A> | Iterator<A> | List<A>
): Array<A> {
  if (isList(iterable)) return Array.isArray(iterable) ? iterable : fromList(iterable)

  if (isIterator(iterable)) return fromIterator(iterable)

  return fromIterator(iterable[Symbol.iterator]())
}

function fromIterator<A>(iterator: Iterator<A>): Array<A> {
  const list = []

  let { value, done } = iterator.next()

  while (!done) {
    list.push(value)

    const next = iterator.next()

    value = next.value
    done = next.done
  }

  return list
}

function fromList<A>(List: List<A>): Array<A> {
  const list = Array(List.length)

  for (let i = 0; i < List.length; ++i) list[i] = List[i]

  return list
}
