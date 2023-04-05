//Advent of Code 2022
//Day 1

const fs = require('fs');

let inputfilename = "/uploads/calories.txt";



let groups = fs.readFileSync(inputfilename, "utf-8").split('\r\n\r\n' || '\n\r\n\r');
//console.log(groups);

let part1 = -Infinity;
for (const group of groups) {
const answers = group.split('\r\n').map(Number);

//console.log(answers);
const elftotal = answers.reduce((acc,cur) => acc+=cur,0);

//console.log("elftotal=" + elftotal);

part1 = Math.max(part1, elftotal);

}
console.log('Part 1 :>> ', part1);
