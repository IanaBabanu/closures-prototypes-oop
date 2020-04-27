function getMathModule(x) {

    let y = 1;
    return {
        sum: () => {
            return x + y;
        },
        subtract: () => {
            return x - y;
        },
        multiply: () => {
            return x * y;
        },
        devide: () => {
            return x / y;
        },
    };
}

let mathModule = getMathModule(5);

// for testing purpose 
let sum = mathModule.sum();
let subt = mathModule.subtract();
let mult = mathModule.multiply();
let dev = mathModule.devide();

console.log(sum);
console.log(subt);
console.log(mult);
console.log(dev);
