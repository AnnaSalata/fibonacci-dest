package src;

function formatResponse(input, fibonacciSequence, computationTime) {
    if (typeof input !== 'number' || input < 0) {
        return JSON.stringify({
            error: 'Invalid input. Please provide a non-negative integer.',
            inputType: typeof input,
            computationTime: null
        });
    }

    const response = {
        input: input,
        fibonacciSequence: fibonacciSequence,
        computationTime: computationTime,
        inputType: typeof input
    };

    return JSON.stringify(response);
}