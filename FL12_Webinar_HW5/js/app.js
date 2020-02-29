const wrapper = document.getElementById('wrapper');
const spinerContainer = document.querySelector('.loader_container');
const editForm = document.getElementById('editForm');

const home = document.getElementById('home');
home.addEventListener('click', () => {
    location.hash = '';
});

const hideSpiner = () => {
    document.body.removeChild(spinerContainer);
}
const showSpiner = () => {
    document.body.appendChild(spinerContainer);
}

// ----- home page -----
const getName = user => {
    const p = document.createElement('p');
    p.innerHTML = user.name;
    p.classList.add('name');
    p.onclick = () => {
        location.hash = `user/${user.id}`;
    };
    return p;
}

const EditBtn = userId => {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'edit_btn');
    btn.innerText = 'Edit';
    btn.onclick = () => {
        location.hash = `edit/${userId}`;
    };
    return btn;
}

const deleteBtn = (userId, delUser) => {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'delete_btn');
    btn.innerText = 'Delete';
    btn.onclick = () => {
        showSpiner();
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'DELETE'
        })
        .then(() => {
            delUser();
            hideSpiner();
        });
    };
    return btn;
}

const getCat = () => {
    const img = document.createElement('img');
    img.classList.add('cat__img');
    fetch('https://cataas.com/cat')
    .then(response => response.blob())
    .then(blob => {
        img.src = URL.createObjectURL(blob);
    });
    return img
}

const createUserList = (userList) => {
    const ul = document.createElement('ul');
    ul.classList.add('userList');

    const delUser = (user) => () => {
        ul.removeChild(user);
    }

    userList.forEach(user => {
        const li = document.createElement('li');
        li.classList.add('userList__item');
        
        li.appendChild(getCat());

        li.appendChild(getName(user));
        li.appendChild(EditBtn(user.id));
        li.appendChild(deleteBtn(user.id, delUser(li)));

        ul.appendChild(li);
    });

    

    wrapper.appendChild(ul);
}

// ---- posts page -----
const createPostList = (postList, redirectComments) => {
    const block = document.createElement('div');
    block.classList.add('block');

    const header = document.createElement('h2');
    header.innerText = 'Posts:';
    block.appendChild(header);

    const ul = document.createElement('ul');
    ul.classList.add('list', 'postList');

    postList.forEach(post => {
        const li = document.createElement('li');
        li.classList.add('item', 'postList__item');

        const title = document.createElement('h4');
        title.innerText = post.title;
        li.appendChild(title);

        const text = document.createElement('p');
        text.textContent = post.body;
        li.appendChild(text);

        li.addEventListener('click', redirectComments(post.id));

        ul.appendChild(li);
    });

    block.appendChild(ul);

    return block;
}

const createComentList = (comments = []) => {
    const block = document.createElement('div');
    block.classList.add('block');

    const header = document.createElement('h2');
    header.innerText = 'Comments:';
    block.appendChild(header);

    const ul = document.createElement('ul');
    ul.classList.add('list', 'commentList');

    comments.forEach(comm => {
        const li = document.createElement('li');
        li.classList.add('item', 'commentList__item');

        const name = document.createElement('h4');
        name.innerText = comm.name;
        li.appendChild(name);

        const text = document.createElement('p');
        text.textContent = comm.body;
        li.appendChild(text);

        ul.appendChild(li);
    });

    block.appendChild(ul);

    return block;
}

const createPostPage = (postList) => {
    let commentsList = createComentList();

    const redirectComments = (postId) => () => {
        if(!document.querySelector('.loader_container')) {
            showSpiner();
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(json => {
            wrapper.removeChild(commentsList);
            commentsList = createComentList(json);
            wrapper.appendChild(commentsList);
            hideSpiner();
        });
    };


    wrapper.appendChild(createPostList(postList, redirectComments));
    wrapper.appendChild(commentsList);
}

// ----- edit form-----
const submitChange = userId => event => {
    event.preventDefault();
    showSpiner();

    let queryJson = {
        id: userId,
        name: editForm.fullName.value,
        username: editForm.userName.value,
        email: editForm.email.value,
        address: {
            street: editForm.street.value,
            suite: editForm.suite.value,
            city: editForm.city.value,
            zipcode: editForm.zipcode.value,
            geo: {
                lat: editForm.lat.value,
                lng: editForm.lng.value
            }
        },
        phone: editForm.phone.value,
        website: editForm.website.value,
        company: {
            name: editForm.companyName.value,
            catchPhrase: editForm.catchPhrase.value,
            bs: editForm.bs.value
        }
    };

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(queryJson),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        location.hash = '';
    });
}

const createForm = (userData) => {
    editForm.fullName.value = userData.name;
    editForm.userName.value = userData.username;
    editForm.email.value = userData.email;
    editForm.phone.value = userData.phone;
    editForm.website.value = userData.website;
    
    editForm.street.value = userData.address.street;
    editForm.suite.value = userData.address.suite;
    editForm.city.value = userData.address.city;
    editForm.zipcode.value = userData.address.zipcode;
    editForm.lat.value = userData.address.geo.lat;
    editForm.lng.value = userData.address.geo.lng;

    editForm.companyName.value = userData.company.name
    editForm.catchPhrase.value = userData.company.catchPhrase
    editForm.bs.value = userData.company.bs

    wrapper.appendChild(editForm);
    
    editForm.onsubmit = submitChange(userData.id);
}

//-------------------------
const getHash = () => {
    let hash = location.hash;
    [page, id = null] = hash.split('/');

    return [page.slice(1), id? Number(id): null];
}

const clearWrapper = () => {
    while(wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild)
    }
}

const redirect = () => {
    if(!document.querySelector('.loader_container')) {
        showSpiner();
    }

    clearWrapper();

    [page, id] = getHash();

    if(!page) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            createUserList(json);
            hideSpiner();
        });
    } else if(page === 'user') {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(json => {
            createPostPage(json)
            hideSpiner();
        });
    } else if(page === 'edit') {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => {
            createForm(json);
            hideSpiner();
        });
    }
}

window.addEventListener('hashchange', redirect);

redirect();
