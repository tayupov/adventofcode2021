const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'UTF-8');

const matrix = data.split(/\r?\n/).map(line => line.split(''));

const getBasinSize = (row, col) => {
    // boundary check
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[row].length) {
        return 0;
    }

    // stop at 9's
    if (matrix[row][col] === 9) {
        return 0;
    }

    const self = +matrix[row][col];
    matrix[row][col] = 9; // visited

    let size = 1;

    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {

            // skip diagonals
            if (i === row - 1 && ((j === col - 1) || (j === col + 1))) {
                continue;
            }
            if (i === row + 1 && ((j === col - 1) || (j === col + 1))) {
                continue;
            }

            const current = +matrix[i]?.[j];

            if (current === 9) {
                continue;
            }
            if (self < current) {
                size += getBasinSize(i, j);
            }
        }
    }
    return size;
}

const isLowPoint = (row, col) => {
    const current = matrix[row][col];
    const previousRow = matrix[row - 1];
    const nextRow = matrix[row + 1];

    const left = matrix[row][col - 1] || 10;
    const right = matrix[row][col + 1] || 10;

    const above = previousRow?.[col] || 10;
    const below = nextRow?.[col] || 10;

    if (
        current < left &&
        current < right &&
        current < above &&
        current < below
    ) {
        return true;
    }
    return false;
}

const basins = []

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

        if (isLowPoint(i, j)) {
            const basinSize = getBasinSize(i, j);
            basins.push(basinSize);
        }
    }

}
const sorted = basins.sort((a, b) => b - a);

console.log(sorted[0]*sorted[1]*sorted[2]);