package main

const prompt = require('prompt-sync')();
const { validateInput, fibList } = require('./FibonacciCalculator');
const fs = require('fs');

function renderHTML(filePath, data) {
    fs.writeFileSync(filePath, data);
}

function main() {
    const userInput = prompt('Enter a number to generate Fibonacci numbers: ');
    const validationResult = validateInput(userInput);

    if (validationResult !== true) {
        console.log(validationResult);
        renderHTML('usage.html', validationResult);
        return;
    }

    const number = parseInt(userInput);
    const { fibonacciNumbers, message } = fibList(number);

    console.log(`Input Number: ${number}`);
    console.log(`Fibonacci Numbers: ${fibonacciNumbers}`);
    console.log(`Message: ${message}`);

    const outputData = `
        <html>
            <body>
                <h1>Fibonacci Results</h1>
                <p>Input Number: ${number}</p>
                <p>Fibonacci Numbers: ${fibonacciNumbers}</p>
                <p>Message: ${message}</p>
            </body>
        </html>
    `;
    renderHTML('output.html', outputData);
}

main();