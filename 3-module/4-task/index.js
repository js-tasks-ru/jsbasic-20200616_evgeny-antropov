/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let filteredUsers;
  filteredUsers = users.filter(u => u['age'] <= age)
    .map(u => `${u['name']}, ${u['balance']}`)
    .join('\n');
  return filteredUsers;
}
