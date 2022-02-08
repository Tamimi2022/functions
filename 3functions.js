// function declaration
function calculate(nomer1, nomer2) {
    const squardNomer1 = nomer1 * nomer1;
    const squardNomer2 = nomer2 * nomer2;
    const total = squardNomer1 + squardNomer2;
    const sum = total * total;
    return sum;
}
calculate(3, 5);
console.log(calculate(3, 5));

// function expression
const math = function(nomer1, nomer2) {
    const squardNomer1 = nomer1 * nomer1;
    const squardNomer2 = nomer2 * nomer2;
    const total = squardNomer1 + squardNomer2;
    const sum = total * total;
    return sum;
};
math(4, 10);
console.log(math(3, 5));

// Arrow function
const numbers = (nomer1, nomer2) => {
    const squardNomer1 = nomer1 * nomer1;
    const squardNomer2 = nomer2 * nomer2;
    const total = squardNomer1 + squardNomer2;
    const sum = total * total;
    return sum;
};
console.log(numbers(3, 5));

// Short way
const number = (nomer1, nomer2) => {
    const total = nomer1 * nomer1 + nomer2 * nomer2;
    return total * total;
};
console.log(number(3, 5));

// Helper function
const square = nomer => nomer * nomer;
const help = (nomer1, nomer2) =>
    square(square(nomer1) + square(nomer2));

    console.log(square(3, 5));