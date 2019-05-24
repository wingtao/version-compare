/*!
 * version-compare.js v1.0.0
 * (c) 2019-2019 wingtao
 * Released under the MIT License.
 */
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var isStrOrNumber = function isStrOrNumber(value) {
  return typeof value === 'number' || typeof value === 'string';
};

function times(num, val) {
  var result = [];

  for (var i = 0; i < num; i++) {
    result.push(val);
  }

  return result;
}

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

  var arr1 = String(v1).split('.');
  var arr2 = String(v2).split('.');
  var len1 = arr1.length;
  var len2 = arr2.length;

  if (len1 !== len2) {
    len1 > len2 ? arr2.push.apply(arr2, _toConsumableArray(times(len1 - len2, 0))) : arr1.push.apply(arr1, _toConsumableArray(times(len2 - len1, 0)));
  }

  var res = true;

  for (var i = 0; i < Math.max(len1, len2); i++) {
    if (arr1[i] < arr2[i]) {
      res = false;
      break;
    }
  }

  return res;
}

export default versionCompare;
