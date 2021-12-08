const fs = require('fs');
const crabs = fs.readFileSync('./input.txt', 'UTF-8')
    .split(',')
    .map(Number);

const range = [];

for (let i = Math.min(...crabs); i <= Math.max(...crabs); i++) {
    range.push(i);
}

let fuels = [];
let tmp;

for (let i = 0; i < range.length; i++) {

    tmp = 0;
    for (let j = 0; j < crabs.length; j++) {
        tmp += Math.abs(range[i] - crabs[j]); 
    }
    fuels.push(tmp);

}

console.log(Math.min(...fuels));