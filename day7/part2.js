console.time('day7')
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
let distance; 

for (let i = 0; i < range.length; i++) {

    tmp = 0;
    
    for (let j = 0; j < crabs.length; j++) {
        distance = Math.abs(range[i] - crabs[j])
        tmp += (distance*(distance+1))/2; 
    }
    fuels.push(tmp);

}

console.log(Math.min(...fuels));
console.timeEnd('day7')
