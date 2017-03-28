export interface RangeArity2 {
  (from: number, to: number): ReadonlyArray<number>

  (from: number): RangeArity1
}

export interface RangeArity1 {
  (to: number): ReadonlyArray<number>
}
