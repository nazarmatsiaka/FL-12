let rootNode = document.getElementById('root');
let setList = [];
let readySetList = [];

if(localStorage.getItem('list')) {
    setList = JSON.parse(localStorage.getItem('list'));
}
if(localStorage.getItem('readyList')) {
    readySetList = JSON.parse(localStorage.getItem('readyList'));
}

let page = getHashData('page');

if(!page) {
    createMainPage();
} else if (page === 'addSet'||page === 'modify') {
    createEditPage();
}

function createMainPage() {
    let main = document.createElement('div');
    main.appendChild(mainHeader());
    main.appendChild(createSetList());

    rootNode.appendChild(main);
}

function mainHeader() {
    let header = document.createElement('div');
    header.classList.add('header');
    let btn = document.createElement('button');
    btn.innerText = 'Add new';
    btn.classList.add('header_btn', 'btn');
    btn.addEventListener('click', () => {
        location.hash = '/addSet';
    });

    header.appendChild(btn);

    return header;
}

function createSetList() {
    let list = document.createElement('ul');
    list.classList.add('list');

    const createItem = (set, status = null) => {
        let listItem = document.createElement('li');
        listItem.classList.add('list_item');

        let text = document.createElement('p');
        text.innerText = set.term + ' - ' + set.description;
        listItem.appendChild(text);

        let btnBox = document.createElement('div');
        listItem.appendChild(btnBox);

        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.classList.add('edit_btn', 'btn');
        editBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            location.hash = '/modify/:' + set.id;
        });
        btnBox.appendChild(editBtn);

        let removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove';
        removeBtn.classList.add('remove_btn', 'btn');
        removeBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            setList = setList.filter(item => item.id !== set.id);
            readySetList = readySetList.filter(item => item.id !== set.id);
            saveToStorage();
            goToPage('main');
        });
        btnBox.appendChild(removeBtn);

        if(status) {
            listItem.classList.add(status);
        } else {
            listItem.addEventListener('click', () => {
                readySetList.push(set);
                setList = setList.filter(item => item.id !== set.id);
                saveToStorage();
                goToPage('main');
            });
        }

        return listItem;
    };

    setList.forEach(set => {
       list.appendChild(createItem(set));
    });
    readySetList.forEach(set => {
        list.appendChild(createItem(set, 'ready'));
    });

    return list;
}

function createEditPage() {
    let page = getHashData('page');
    let setId = getHashData('setId');

    let editPage = document.createElement('div');
    editPage.classList.add('editPage');

    let term;
    let termInput = document.createElement('input');
    termInput.placeholder = 'Enter Term';
    if(page === 'modify') {
        term = getValue(setId, 'term');
        termInput.value = term;
    }
    termInput.addEventListener('input', (event) => {
        term = event.target.value;

    });
    editPage.appendChild(termInput);

    let description;
    let descriptionInput = document.createElement('input');
    descriptionInput.placeholder = 'Enter description';
    if(page === 'modify') {
        description = getValue(setId, 'description');
        descriptionInput.value = description;
    }
    descriptionInput.addEventListener('input', (event) => {
        description = event.target.value;
    });
    editPage.appendChild(descriptionInput);

    let saveBtn = document.createElement('button');
    saveBtn.innerText = 'Save Changes';
    saveBtn.classList.add('save_btn', 'btn');
    saveBtn.addEventListener('click', () => {
        if(term && description) {
            if(page === 'addSet') {
                setList.push({id: getNewId(), term: term, description: description});
            } else if(page === 'modify') {
                setList = setList.map(item =>
                    item.id === setId? {id: item.id, term: term, description: description}: item);
                readySetList = readySetList.map(item =>
                    item.id === setId? {id: item.id, term: term, description: description}: item);
            }

            saveToStorage();
            location.hash = '';
        }
    });
    editPage.appendChild(saveBtn);

    let cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    cancelBtn.classList.add('cancel_btn', 'btn');
    cancelBtn.addEventListener('click', () => {
        location.hash = '';
    });
    editPage.appendChild(cancelBtn);

    rootNode.appendChild(editPage);
}

function getHashData(name) {
    let hash = location.hash.split('/');
    let pageNum = 1;
    let setIdNum = 2;

    if(name === 'page') {
        return hash[pageNum]? hash[pageNum]: null;
    } else if(name === 'setId') {
        return hash[setIdNum]? Number(hash[setIdNum].slice(1)): null;
    }
}
function getValue(id, name) {
    let result;

    setList.forEach(item => {
        if(item.id === id) {
            result = item[name];
        }
    });

    readySetList.forEach(item => {
        if(item.id === id) {
            result = item[name];
        }
    });

    return result;
}
function getNewId() {
    let id = 0;

    id = setList.reduce((max, item) => item.id > max? item.id: max, id);
    id = readySetList.reduce((max, item) => item.id > max? item.id: max, id);

    return id + 1;

}
function saveToStorage() {
    localStorage.setItem('list', JSON.stringify(setList));
    localStorage.setItem('readyList', JSON.stringify(readySetList));
}
function goToPage(page) {
    for(let i of rootNode.children) {
        rootNode.removeChild(i);
    }

    if(page === 'main') {
        createMainPage();
    } else if(page === 'editPage') {
        createEditPage();
    }
}

window.addEventListener('hashchange', () => {
    let page = getHashData('page');

    if(!page) {
        goToPage('main');
    } else if (page === 'addSet'||page === 'modify') {
        goToPage('editPage');
    }
});
