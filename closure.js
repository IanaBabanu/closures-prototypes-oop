function getMathModule(x) {

    return {
        sum: (x, y) => {
            return x + y;
        },
        subtract: (x, y) => {
            return x - y;
        },
        multiply: (x, y) => {
            return x * y;
        },
        devide: (x, y) => {
            return x / y;
        },
    };
}

let mathModule = getMathModule();

// for testing purpose 
let sum = mathModule.sum(5, 5);
let subt = mathModule.subtract(5, 5);
let mult = mathModule.multiply(5, 5);
let dev = mathModule.devide(5, 5);

console.log(sum);
console.log(mult);
console.log(dev);
console.log(subt);