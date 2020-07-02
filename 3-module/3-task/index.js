/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str.split('-').map(function (element, index) {
    if (index === 0) {
      return element;
    } else {
      return element[0].toUpperCase() + element.slice(1);
    }

  }).join('');
}
