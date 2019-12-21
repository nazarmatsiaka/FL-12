let a = Number(prompt('input a:'));
let b = Number(prompt('input b:'));
let c = Number(prompt('input c:'));

if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && a !=='' && b !=='' && c !=='') {
    let discriminant = b * b - 4 * a * c;
    if(discriminant < 0) {
        console.log('no solution');
    } else if(discriminant === 0) {
        let x = -b / (2 * a);
        console.log('x = ' + Math.round(x));
    } else {
        let x1 = (-b + Math.sqrt(discriminant))/ (2 * a);
        let x2 = (-b - Math.sqrt(discriminant))/ (2 * a);
        console.log('x1 = ' + Math.round(x1) + ' and x2 = ' + Math.round(x2));
    }
} else {
    console.log('Invalid input data');
}