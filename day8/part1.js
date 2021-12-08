const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'UTF-8');

const lines = data.split(/\r?\n/).map(s => s.split(' | '));

let cnt = 0;
const segmentsLengths1478 = [2,4,3,7];

lines.forEach(line => {
    const output = line[1].split(' ');
    output.forEach(v => {
        if (segmentsLengths1478.includes(v.length)) {
            cnt++;
        }
    });
});


console.log(cnt);