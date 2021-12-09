const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'UTF-8');

const lines = data.split(/\r?\n/).map(line => line.split(''));

let sumRiskLevel = 0;

for (let i = 0; i < lines.length; i++) {
    const row = lines[i];
    const previousRow = lines[i - 1];
    const nextRow = lines[i + 1];

    for (let j = 0; j < row.length; j++) {

        const element = row[j];
        const elementLeft = row[j - 1] || 10;
        const elementRight = row[j + 1] || 10;

        const elementAbove = previousRow?.[j] || 10;
        const elementBelow = nextRow?.[j] || 10;

        if (
            element < elementLeft &&
            element < elementRight &&
            element < elementAbove &&
            element < elementBelow
        ) {
            const riskLevel = +element + 1;
            sumRiskLevel += riskLevel;
        }
    }

}