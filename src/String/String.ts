import { invoker } from '../invoker'

export const endsWith: EndsWith = invoker<string, string, boolean>(1, 'endsWith')
export const includes: Includes = invoker<string, string, boolean>(1, 'includes')
export const startsWith: StartsWith = invoker<string, string, boolean>(1, 'startsWith')
export const trim: (str: string) => string = invoker<string, string>(0, 'trim')
export const split: Split = invoker<string, string | RegExp, string>(1, 'split')
export const toLowerCase: (str: string) => string = invoker<string, string>(0, 'toLowerCase')
export const toUpperCase: (str: string) => string = invoker<string, string>(0, 'toUpperCase')
export const substring: SubstringArity3 = invoker<string, number, number, string>(2, 'substring')
export const substr: SubstrArity3 = invoker<string, number, number, string>(2, 'substr')

export type EndsWith = {
  (search: string, str: string): boolean
  (search: string): (str: string) => boolean
}

export type Includes = EndsWith
export type StartsWith = EndsWith

export type Split = {
  (search: string | RegExp, str: string): string
  (search: string | RegExp): (str: string) => string
}

export type SubstringArity3 = {
  (startIndex: number, endIndex: number | void, str: string): string
  (startIndex: number, endIndex: number | void): SubstringArity1
  (startIndex: number): SubstringArity2
}

export type SubstringArity2 = {
  (endIndex: number | void, str: string): string
  (endIndex: number | void): SubstringArity1
}

export type SubstringArity1 = (str: string) => string

export type SubstrArity3 = {
  (startIndex: number, length: number | void, str: string): string
  (startIndex: number, length: number | void): SubstrArity1
  (startIndex: number): SubstrArity2
}

export type SubstrArity2 = {
  (length: number | void, str: string): string
  (length: number | void): SubstrArity1
}

export type SubstrArity1 = (str: string) => string
