const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'UTF-8');

const lines = data.split(/\r?\n/).map(a => a.split(''));

const opposite = { '(': ')', '[': ']', '{': '}', '<': '>' };
const opening = ['(', '[', '{', '<'];
const value = { ')': 3, ']': 57, '}': 1197, '>': 25137 };

const foundErrors = [];

lines.forEach(line => {
    const stack = [];
    for (let i = 0; i < line.length; i++) {
        const curr = line[i];
        if (opening.includes(curr)) {
            stack.push(curr);
        } else {
            const lastInStack = stack.pop();
            if (opposite[lastInStack] != curr) {
                foundErrors.push(curr);
                break;
            }
        }
    }
});

let totalScore = foundErrors.reduce((total, curr) => total + value[curr], 0);

console.log(totalScore);