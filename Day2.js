// Advent of Code 2022 Day 2 Part 1
// Markus Hammelmann
// Node.js 
// Start 2.12.2022 6:00 End 6:

const TRAINING = false;
// const TRAINING = true;
const fs = require("fs");
console.log(__dirname)
let inputfilename = (TRAINING) ? __dirname +\\input_training.txt : __dirname +\\input.txt;
console.log(inputfilename);
let input = fs.readFileSync(inputfilename, "utf-8").split('\r\n' || '\n\r')
    .map(l => l.split(' '));
// console.log(input);

const SEL = {
    A: {Name: "Rock", Value: 1},
    B: {Name: "Paper",  Value: 2},
    C: {Name: "Scissors", Value: 3},
    X: {Name: "Rock", Value: 1},
    Y: {Name: "Paper", Value: 2},
    Z: {Name: "Scissors",  Value: 3},
}

let part1 = 0;
input.forEach(l => {
    const c2 = SEL[l[1]]; //?
    const c1 = SEL[l[0]];
    let winningscore = c2.Value; //?
    if (c1.Value === c2.Value) winningscore = 3 + c2.Value; // Tie
    if (c2.Value === (c1.Value % 3 + 1)) winningscore = 6 + c2.Value;
    // console.log(l[0],l[1], winningscore, c2.Value);
    part1 += winningscore;
});
console.log(`Part 1: ${part1}`);
