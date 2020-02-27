const userListContainer = document.getElementById('userList');
const spinerContainer = document.querySelector('.loader_container');

const hideSpiner = () => {
    document.body.removeChild(spinerContainer);
}
const showSpiner = () => {
    document.body.insertBefore(spinerContainer, userListContainer);
}

const createUserList = (userList) => {
    userList.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = user.title;
        li.onclick = () => {alert('123')}
        userListContainer.appendChild(li);
    })
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    createUserList(json);
    hideSpiner();
  });