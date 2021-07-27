import { zip } from 'lodash'

export { v4 as uuid } from 'uuid'

export const cast = <T>(t: T): T => t

export const times = (n: number): number[] => [...Array(n).keys()]

export const uptil = (f: number, t: number): number[] => (
  Array.from({ length: t - f }, (_, i) => f + i)
)

export const upto = (f: number, t: number): number[] => uptil(f, t + 1)

export const foldLeft = <T, U>(arr: readonly T[], init: U) => {
  return (fn: (acc: U, elem: T, idx: number) => U): U => arr.reduce(fn, init)
}

export const zipStrict = <T, U>(ts: readonly T[], us: readonly U[]): Array<[T, U]> => {
  if(ts.length !== us.length) {
    throw new TypeError('arguments of zipStrict have different length')
  }
  return zip(ts, us) as Array<[T, U]>
}
