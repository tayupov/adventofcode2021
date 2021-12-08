const fs = require('fs');
const { uptime } = require('process');

const data = fs.readFileSync('./input.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

const position = { depth: 0, horizontal: 0, aim: 0}

lines.forEach(line => {
    const [command, value] = line.split(' ');
    switch (command) {
        case 'up':
            position.aim -= +value;
            break;
        case 'down':
            position.aim += +value;
            break;
        case 'forward':
            position.horizontal += +value;
            position.depth += position.aim * +value;
            break;        
    }
});

const finalPosition = position.depth * position.horizontal;
console.log(finalPosition);
