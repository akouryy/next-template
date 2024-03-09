import { zip } from 'lodash'

export { v4 as uuid } from 'uuid'

export const zipStrict = <T, U>(ts: readonly T[], us: readonly U[]): Array<[T, U]> => {
  if(ts.length !== us.length) {
    throw new TypeError('arguments of zipStrict have different length')
  }
  return zip(ts, us) as Array<[T, U]>
}
