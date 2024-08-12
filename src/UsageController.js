package UsageController;

import fs from 'fs';
import path from 'path';

export const fib_usage = (req, res) => {
    fs.readFile(path.join(__dirname, 'usage.html'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading usage file');
            return;
        }
        res.status(200).send(data);
    });
};