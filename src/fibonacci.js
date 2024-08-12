package fibonacci;

function calculateFibonacci(inputValue) {
    if (typeof inputValue !== 'number' || inputValue < 0 || !Number.isInteger(inputValue)) {
        return 'Invalid input. Please provide a non-negative integer.';
    }

    inputValue = Math.floor(inputValue);
    let fibonacciSequence = [];

    if (inputValue === 0) {
        return fibonacciSequence;
    } else if (inputValue === 1) {
        fibonacciSequence.push(0);
        return fibonacciSequence;
    } else if (inputValue === 2) {
        fibonacciSequence.push(0, 1);
        return fibonacciSequence;
    }

    let a = 0, b = 1;
    for (let i = 2; i < inputValue; i++) {
        fibonacciSequence.push(b);
        let temp = a + b;
        a = b;
        b = temp;
    }

    return fibonacciSequence;
}