const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

let current, tmp, increases = 0;

for (let i = 0; i < lines.length; i++) {
    current = +lines[i] + +lines[i+1] + +lines[i+2];
    if (current > tmp) {
        increases++
    }
    console.log(tmp, current)
    tmp = current;
}

console.log(increases);