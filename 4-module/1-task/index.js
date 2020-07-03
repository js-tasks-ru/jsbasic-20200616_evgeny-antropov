/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let friendsList = document.createElement('ul');

    for (let friend of friends) {
      let friendsItem = document.createElement('li');
      let friendFirstName = friend.firstName;
      let friendLastName = friend.lastName;
      friendsItem.innerHTML = friendFirstName + ' ' + friendLastName;
      friendsList.append(friendsItem);
    }

    return friendsList;
}
