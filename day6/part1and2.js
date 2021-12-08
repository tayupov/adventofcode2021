const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'UTF-8').split(',').map(Number);

const days = '256';

// init map
const fish = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0
}
// convert input to map
data.split(',').map(Number).forEach(key => fish[key]++ );

let tmp = 0;

for (let i = 0; i < days; i++) {
    tmp = fish[0];
    for (let i = 0; i <= 8; i++) {
        fish[i] = fish[i + 1];
    }
    fish[8] = tmp;
    fish[6] += tmp;
}

console.log(Object.values(fish).reduce((a, b) => a + b, 0))
