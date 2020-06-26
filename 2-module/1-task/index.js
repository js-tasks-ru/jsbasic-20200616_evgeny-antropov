/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let result = 0;
  let valuesArr = Object.values(salaries);

  for (let i = 0; i < valuesArr.length; i++) {
    if (Object.prototype.toString.call(valuesArr[i]) === '[object Number]') {
      result += valuesArr[i];
    } else {
      return result;
    }
  }

  return result;
}
