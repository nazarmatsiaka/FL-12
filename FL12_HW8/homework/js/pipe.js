function pipe(num, ...funcs) {

    for(let i = 0; i < funcs.length; i++) {
        num = funcs[i](num);
    }
    
    return num;
}

pipe();