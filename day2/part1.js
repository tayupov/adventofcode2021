const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

const position = { depth: 0, horizontal: 0}

lines.forEach(line => {
    const [command, value] = line.split(' ');
    switch (command) {
        case 'up':
            position.depth -= +value;
            break;
        case 'down':
            position.depth += +value;
            break;
        case 'forward':
            position.horizontal += +value;
            break;        
    }
});

const finalPosition = position.depth * position.horizontal;
console.log(finalPosition);
