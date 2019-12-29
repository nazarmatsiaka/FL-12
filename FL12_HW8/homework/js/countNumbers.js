function makeNumber(str) {
    let num = '';
    
    for(let i = 0; i < str.length; i++) {
        if(parseInt(str[i]) || parseInt(str[i]) === 0) {
            num += str[i];
        }
    }

    return num;
}

function countNumbers(str) {
    let obj = {};
    let numStr = makeNumber(str);
    
    for (let i = 0; i < numStr.length; i++) {
        obj[numStr[i]] = obj[numStr[i]] ? obj[numStr[i]] + 1: 1;
    }

    return obj;
}

countNumbers();