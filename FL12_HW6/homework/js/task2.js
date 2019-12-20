let a = Number(prompt('input a:'));
let b = Number(prompt('input b:'));
let c = Number(prompt('input c:'));

if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && a !=='' && b !=='' && c !=='') {
    if(a > 0 && b > 0 && c > 0) {
        if(a + b > c && a + c > b && b + c > a) {
            if( a === b && b === c) {
                console.log('Equilateral triangle');
            } else if (a === b || b === c || a === c) {
                console.log('Isosceles triangle');
            } else {
                console.log('Scalene triangle');
            }
        } else {
            console.log('Triangle doesn’t exist');
        }
    } else {
        console.log('A triangle must have 3 sides with a positive definite length');
    }
} else {
    console.log('input values should be ONLY numbers');
}