/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  return arr.filter(function (e) {
    if (e >= a && e <= b) {
      return e;
    }
  })
}
