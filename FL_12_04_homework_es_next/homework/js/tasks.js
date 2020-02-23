// -----Task 1

const array = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
const maxElement = arr => Math.max(...arr);

// console.log(maxElement(array));

// ------Task 2

const array2 = [1, 2, 3];

const copyArray = arr => [...arr];

// const copiedArray = copyArray(array2);
// console.log(array2, copiedArray);
// console.log(array2 === copiedArray);

// -----Task 3

const user = {name: 123};

const addUnoqueId = obj => ({ ...obj, id: Symbol('id')});

// console.log(addUnoqueId(user));
// console.log(user)

// -----Task 4

const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}};

const regroupObject = ({name: firstName, details: {id, age, university}}) => (
    {university, user: {id, firstName, age}}
);

// console.log(regroupObject(oldObj));

// -----Task 5

const array3 = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];

const findUniqueElements = arr => [...new Set(arr)];

// console.log(findUniqueElements(array3));

// -----Task 6

const phoneNumber = '0123456789';

const hideNumber = num => num.slice(-4).padStart(num.length, '*');

// console.log(hideNumber(phoneNumber));

// -----Task 7

const errorFunc = () => {
    throw new Error('Missing property');
}

const add = (a = errorFunc(), b = errorFunc()) => a + b;

// console.log(add(1));

// -----Task 8

const getName1 = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(
        result => result.json()
    ).then(
        users => users.map(user => user.name).sort()
    );
}

// getName1().then(name => console.log(name));

// -----Task 9

const getName2 = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();
    let names = users.map(user => user.name);
    
    return names.sort();
}

// getName2().then(name => console.log(name));


