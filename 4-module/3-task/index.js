/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let row = table.getElementsByTagName('tr');
  let positionGender;
  let positionAge;
  let positionStatus;
  let classContainer = {
    m: 'male',
    f: 'female',
    true: 'available',
    false: 'unavailable'
  }

  for (let i = 0; i < row[0].children.length; i++) {
    if (row[0].children[i].innerHTML === 'Age') {
      positionAge = i;

    }
    if (row[0].children[i].innerHTML === 'Gender') {
      positionGender = i;

    }
    if (row[0].children[i].innerHTML === 'Status') {
      positionStatus = i;

    }
  }

  for (let j = 1; j < row.length; j++) {
    let classGender = row[j].children[positionGender];

    classGender.parentNode.classList.add(classContainer[classGender.innerHTML]);

    let classAge = row[j].children[positionAge].innerHTML;

    if (classAge < 18) {
      classGender.parentNode.setAttribute('style', 'text-decoration: line-through');
    }

    let classStatus = row[j].children[positionStatus];

    if (classStatus.hasAttribute('data-available')) {
      let elem = classStatus.getAttribute('data-available');

      classStatus.parentNode.classList.add(classContainer[elem]);
    } else {
      classStatus.parentNode.hidden = true;
    }
  }
}
