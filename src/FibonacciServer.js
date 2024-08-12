package src;

import http from 'http';
import FibonacciCalculator from './FibonacciCalculator';
import FibonacciResponse from './FibonacciResponse';

const server = http.createServer((req, res) => {
    const urlPattern = /^\/fib\/(\d+)$/;
    const match = req.url.match(urlPattern);

    if (req.method === 'GET' && match) {
        const n = parseInt(match[1], 10);

        if (n < 0) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(FibonacciResponse.error('Negative inputs are not allowed.')));
            return;
        }

        if (isNaN(n)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(FibonacciResponse.error('Invalid input. Please provide a numeric value.')));
            return;
        }

        const startTime = Date.now();
        const fibonacciSequence = FibonacciCalculator.calculateFibonacci(n);
        const computationTime = Date.now() - startTime;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(FibonacciResponse.success(n, fibonacciSequence, computationTime)));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(FibonacciResponse.error('Endpoint not found.')));
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});