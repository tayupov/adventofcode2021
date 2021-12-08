const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

let current, tmp, increases = 0;

lines.forEach((line) => {
    current = +line;
    if (current > tmp) {
        increases++;
    }
    tmp = current;
});

console.log(increases);