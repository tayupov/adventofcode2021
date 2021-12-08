const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'UTF-8');
const lines = data.split(/\r?\n/).map(s => s.split(' | '));

const difference = (signal1, signal2) => {
    let diff = '';
    signal2.split('').forEach((char) => {
        if (!signal1.includes(char)) {
            diff += char;
        }
    });
    return diff;
}

const findNine = (signalEight, signals) => {
    const signalsLengthSix = signals.filter(s => s.length === 6);
    const signalFour = signals.find(s => s.length == 4);

    const signalNine = signalsLengthSix.find(s => {
        return !signalFour.includes(difference(s, signalEight));
    });

    return signalNine;
}

const findZero = (signalNine, signals) => {
    const signalsLengthSix = signals.filter(s => s.length === 6);
    const signalSeven = signals.find(s => s.length == 3);

    const signalZero = signalsLengthSix.find(s => {
        return !signalSeven.includes(difference(s, signalNine));
    });

    return signalZero;
}

const findSix = (signals, signalZero, signalNine) => {
    const signalsLengthSix = signals.filter(s => s.length === 6);
    return signalsLengthSix.find(s => s !== signalZero && s !== signalNine);
}

const findFive = (signals, signalSix, signalNine, signalEight) => {
    const bottomLeft = difference(signalNine, signalEight);
    const signalFiveChar = signalSix.split('').filter(s => s !== bottomLeft);
    const signalFive = signals.find(s =>
        s.split('').every(char => signalFiveChar.includes(char))
    );

    return signalFive;
}

const findTwo = (signals, signalNine, signalEight) => {
    const bottomLeft = difference(signalNine, signalEight);
    const diffEight = signals.filter(s => difference(s, signalEight).length === 2);
    const signalTwo = diffEight.find(s => s.includes(bottomLeft));

    return signalTwo;
}

// brute
const findThree = (signals, signalZero, signalOne, signalTwo, signalFour, signalFive, signalSix, signalSeven, signalEight, signalNine) => {
    const signalThree = signals.find(s =>
        s !== signalZero &&
        s !== signalOne &&
        s !== signalTwo &&
        s !== signalFour &&
        s !== signalFive &&
        s !== signalSix &&
        s !== signalSeven &&
        s !== signalEight &&
        s !== signalNine
    )
    return signalThree;
}

let sum = 0;

lines.forEach(line => {
    const signals = line[0].split(' ');
    const outputs = line[1].split(' ');

    const signalOne = signals.find(s => s.length === 2);
    const signalFour = signals.find(s => s.length === 4);
    const signalSeven = signals.find(s => s.length === 3);
    const signalEight = signals.find(s => s.length === 7);

    const signalNine = findNine(signalEight, signals);
    const signalZero = findZero(signalNine, signals);

    const signalSix = findSix(signals, signalZero, signalNine);
    const signalFive = findFive(signals, signalSix, signalNine, signalEight);

    const signalTwo = findTwo(signals, signalNine, signalEight);
    const signalThree = findThree(signals, signalZero, signalOne, signalTwo, signalFour, signalFive, signalSix, signalSeven, signalEight, signalNine);

    const segments = {
        [signalZero]: '0',
        [signalOne]: '1',
        [signalTwo]: '2',
        [signalThree]: '3',
        [signalFour]: '4',
        [signalFive]: '5',
        [signalSix]: '6',
        [signalSeven]: '7',
        [signalEight]: '8',
        [signalNine]: '9',
    }


    let outputNum = '';
    outputs.forEach(output => {
        const segmentKeys = Object.keys(segments);
        const outputChars = output.split('');


        const key = segmentKeys
            .filter(key => key.split('').every(char => outputChars.includes(char)))
            .find(key => key.length === output.length);

        outputNum += segments[key]

    });

    sum += parseInt(outputNum, 10);
    lineSum = '';
});

console.log(sum);