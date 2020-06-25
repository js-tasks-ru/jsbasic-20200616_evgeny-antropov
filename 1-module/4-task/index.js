/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let lowerStr = str.toLowerCase() + str.slice(0);

  return lowerStr.includes('1xbet') || lowerStr.includes('xxx');
}
