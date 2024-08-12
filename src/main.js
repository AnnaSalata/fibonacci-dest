package main;

const prompt = require('prompt-sync')();
const { renderTestScript } = require('./TestScript');

console.log('Welcome to the Fibonacci Test Script Application!');

const userResponse = prompt('Would you like to view the Fibonacci test script? (yes/no) ');

if (userResponse.toLowerCase() === 'yes') {
    renderTestScript();
} else {
    console.log('Exiting the application.');
    process.exit();
}