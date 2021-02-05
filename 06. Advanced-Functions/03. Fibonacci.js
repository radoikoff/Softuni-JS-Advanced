function getFibonator() {
    let prev = -1;
    let current = 0;

    function calc() {
        const result = prev + current;
        prev = current;
        current = result;
        return -result;
    };

    return calc;
};

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
