 // Advent of Code 2022 Day 1 Part 1
// Markus Hammelmann
// Node.js
// Start 1.12.2022 6:00 End 6:05

// Topic: Grouped Data, Sums of Arrays
// Library Functions used: none

// const TRAINING = true;
const TRAINING = false;
const fs = require('fs');

let inputfilename;
(TRAINING) ? inputfilename = "./input_training.txt" : inputfilename = "./input.txt";
let groups = fs.readFileSync(inputfilename, "utf-8").split('\r\n\r\n' || '\n\r\n\r')

let part1 = -Infinity;
for (const group of groups) {
const answers = group.split('\r\n').map(Number);
console.log(answers);
const elftotal = answers.reduce((acc,cur) => acc+=cur,0)
// console.log(answerSet.size);
part1 = Math.max(part1, elftotal);

}
console.log('Part 1 :>> ', part1);