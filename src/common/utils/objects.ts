/**
 *
 * @param val
 * @param fallback
 * @returns
 */

export const matVa = <T extends string | number | symbol | undefined, Val>(
  val?: T,
  fallback?: any
) => {
  return (obj: Partial<Record<T, Val>>) => {
    if (!val) {
      return fallback || null;
    }
    const result = obj[val];

    if (!result) {
      return fallback || null;
    }
    return result;
  };
};
