import { times, isStrOrNumber } from './utils';

/**
 *
 * @param v1
 * @param v2
 * @returns {boolean} is v1 bigger than v2
 */

function versionCompare(v1, v2) {
  if (!v1 || !v2) {
    throw new Error('lack the version when compare the versions');
  }
  if (!isStrOrNumber(v1) || !isStrOrNumber(v2)) {
    throw new TypeError('param must be string or number');
  }
  const arr1 = String(v1).split('.');
  const arr2 = String(v2).split('.');
  const len1 = arr1.length;
  const len2 = arr2.length;

  if (len1 !== len2) {
    len1 > len2
      ? arr2.concat(times(len1 - len2, 0))
      : arr1.concat(times(len2 - len1, 0));
  }
  let res = true;
  for (let i = 0; i < len1; i++) {
    if (arr1[i] < arr2[i]) {
      res = false;
      break;
    }
  }
  return res;
}

export default versionCompare;
