let rootNode = document.getElementById('root');
let setList = [];

if(localStorage.getItem('list')) {
    setList = JSON.parse(localStorage.getItem('list'));
}

let page = getHashData('page');

if(!page) {
    createMainPage();
} else if(page === 'addSet'||page === 'modify') {
    createEditPage();
}

// create main page;
function createMainPage() {
    let main = document.createElement('div');
    main.appendChild(mainHeader());
    main.appendChild(createSetBlock());

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

function createSetBlock() {
    let setBlock = document.createElement('div');
    setBlock.classList.add('setBlock');
    setBlock.classList.add('set_block');

    const createBtnBlock = (setId) => {
        let btnBox = document.createElement('div');

        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.classList.add('edit_btn', 'btn');
        editBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            location.hash = '/modify/:' + setId;
        });
        btnBox.appendChild(editBtn);

        let removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove';
        removeBtn.classList.add('remove_btn', 'btn');
        removeBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            setList = setList.filter(item => item.id !== setId);
            saveToStorage();
            goToPage('main');
        });
        btnBox.appendChild(removeBtn);

        return btnBox;
    };

    const createItem = (set) => {
        const block = document.createElement('div');
        block.classList.add('list_item');
        if(set.studied) {
            block.classList.add('studied');
        } else {
            block.addEventListener('click', () => {
                set.studied = true;
                setList = setList.map(task =>
                    task.id === set.id? set: task);
                saveToStorage();
                goToPage('main');
            });
        }

        const list = document.createElement('dl');

        const setName = document.createElement('dt');
        setName.innerText = set.name + ':';
        list.appendChild(setName);

        set.terms.forEach(item => {
            const term = document.createElement('dd');
            term.innerText = item.term + ' - ' + item.definition;

            list.appendChild(term);
        });

        block.appendChild(list);
        block.appendChild(createBtnBlock(set.id));

        return block;
    };

    setList.forEach(set => {
        if(!set.studied) {
            setBlock.appendChild(createItem(set));
        }
    });
    setList.forEach(set => {
        if(set.studied) {
            setBlock.appendChild(createItem(set));
        }
    });
    return setBlock;
}

// create edit page
function createEditPage() {
    let page = getHashData('page');
    let setId = getHashData('setId');

    let setItem = {id: getNewId(setList), name: '', studied: false, terms: []};
    if(setId) {
        setItem = setList[setList.map(item => item.id).indexOf(setId)];
    }

    let editPage = document.createElement('div');
    editPage.classList.add('edit_page');

    let setName = document.createElement('input');
    setName.placeholder = 'Enter name';
    setName.value = setItem.name;
    setName.addEventListener('input', (event) => {
        setItem.name = event.target.value;
    });
    editPage.appendChild(setName);


    const createTermBlock = item => {
        let termBlock = document.createElement('div');

        let termInput = document.createElement('input');
        termInput.placeholder = 'Enter term';
        termInput.value = item.term;
        termInput.addEventListener('input', (event) => {
            setItem.terms = setItem.terms.map(term =>
                term.id === item.id? {id: term.id, term: event.target.value, definition: term.definition}: term);
        });
        termBlock.appendChild(termInput);

        let definitionInput = document.createElement('input');
        definitionInput.placeholder = 'Enter definition';
        definitionInput.value = item.definition;
        definitionInput.addEventListener('input', (event) => {
            setItem.terms = setItem.terms.map(term =>
                term.id === item.id? {id: term.id, term: term.term, definition: event.target.value}: term);
        });
        termBlock.appendChild(definitionInput);


        let removeBtn = document.createElement('button');
        removeBtn.innerText = 'remove';
        removeBtn.classList.add('btn', 'remove_btn');
        removeBtn.addEventListener('click', function() {
            setItem.terms = setItem.terms.filter(term => term.id !== item.id);
            editPage.removeChild(this.parentNode);
        });
        termBlock.appendChild(removeBtn);

        editPage.appendChild(termBlock);
    }

    let addTermBtn = document.createElement('button');
    addTermBtn.classList.add('btn');
    addTermBtn.innerText = 'Add term';
    addTermBtn.addEventListener('click', () => {
        let termObj = {id: getNewId(setItem.terms), term: '', definition: ''};
        setItem.terms.push(termObj);
        createTermBlock(termObj);
    });
    editPage.appendChild(addTermBtn);

    let saveBtn = document.createElement('button');
    saveBtn.classList.add('btn', 'save_btn');
    saveBtn.innerText = 'Save changes';
    saveBtn.addEventListener('click', () => {
        if(setItem.name) {
            if(page === 'addSet') {
                setList.push(setItem);
            } else if(page === 'modify') {
                setList = setList.map(task =>
                    task.id === setId? setItem: task);
            }
            saveToStorage();
            location.hash = '';
        }
    });
    editPage.appendChild(saveBtn);

    let cancelBtn = document.createElement('button');
    cancelBtn.classList.add('btn', 'cancel_btn');
    cancelBtn.innerText = 'Cancel';
    cancelBtn.addEventListener('click', () => {
        location.hash = '';
    });
    editPage.appendChild(cancelBtn);

    setItem.terms.forEach(item => createTermBlock(item));

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

function saveToStorage() {
    localStorage.setItem('list', JSON.stringify(setList));
}

function getNewId(list) {
    let id = 0;

    id = list.reduce((max, item) => item.id > max? item.id: max, id);

    return id + 1;

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
