const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

const map = [];

// create map with most popular digits
lines.forEach(line => {
    const bits = line.split('');
    for (let i = 0; i < bits.length; i++) {
        if (!map[i]) { map[i] = 0; }
        map[i] += parseInt(bits[i], 10);
    }
});

let gammaBinaryString = '';
let epsilonBinaryString = '';

// create binary numbers based on most popular digits
map.forEach(digitCount => {
    if (digitCount > (lines.length/2)) {
        gammaBinaryString += 1;
        epsilonBinaryString += 0;
    } else {
        gammaBinaryString += 0;
        epsilonBinaryString += 1;
    }
});

const gamma = parseInt(gammaBinaryString, 2);
const epsilon = parseInt(epsilonBinaryString, 2);

console.log(gamma*epsilon);
