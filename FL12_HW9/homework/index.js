function convert() {
    let arr = []

    for(let num of arguments) {
        arr.push(Number(num));
    }

    return arr;
}

function executeforEach(arr, fn) {
    for(let num of arr) {
        fn(num);
    }
}

function mapArray(arr, fn) {
    let result = [];

    executeforEach(arr, (num) => {
        result.push(fn(Number(num)));
    });
    
    return result;
}

function filterArray(arr, fn) {
    let filterArr = [];

    executeforEach(arr, (num) => {
        if(fn(Number(num))) {
            filterArr.push(Number(num));
        }
    });
    
    return filterArr;
}

function flipOver(str) {
    let revStr = '';
    
    for(let s of str) {
        revStr = s + revStr;
    }
    return revStr;
}

function makeListFromRange([first, last]) {
    let arr = [];
    
    for(let i = first; i <= last; i++) {
        arr.push(i);
    }

    return arr;
}

function getArrayOfKeys(arr, name) {
    let resultArr = [];

    executeforEach(arr, (obj) => resultArr.push(obj[name]));

    return resultArr;
}

function substitute(arr){
    let minSize = 30;

    return mapArray(arr, (num) => num > minSize? num: '*');
}

function getPastDay(date, days) {
    let resultDate = new Date(date);
    resultDate.setDate(resultDate.getDate() - days);
    return resultDate.getDate();
}

function formatDate(date) {
    let strDate = '';

    strDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

    return strDate;
}
