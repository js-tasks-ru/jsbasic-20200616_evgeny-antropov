/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

//писал все через if, но WebStorm помогает всё упрощать)
