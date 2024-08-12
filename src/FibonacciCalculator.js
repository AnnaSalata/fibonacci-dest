package src;

const TRUNCATE_AFTER_THIS_MANY = 10000;

function fibList(num) {
    let fibNumbers = [];
    let message = '';

    if (num === 1) {
        fibNumbers.push(0);
    } else if (num === 2) {
        fibNumbers.push(0, 1);
    } else if (num > 2) {
        if (num > TRUNCATE_AFTER_THIS_MANY) {
            num = TRUNCATE_AFTER_THIS_MANY;
            message = `Input truncated to ${TRUNCATE_AFTER_THIS_MANY}.`;
        }
        let a = 0, b = 1;
        fibNumbers.push(a, b);
        for (let i = 2; i < num; i++) {
            let next = a + b;
            fibNumbers.push(next);
            a = b;
            b = next;
        }
    }
    return [fibNumbers, message];
}

function validateInput(argument) {
    const number = parseInt(argument, 10);
    if (isNaN(number)) {
        return { error: 'Invalid input. Please enter a valid number.', render: 'usage.html' };
    }
    if (number < 0) {
        return { error: 'Negative numbers are not allowed.', render: 'usage.html' };
    }
    return { number: number, error: null };
}