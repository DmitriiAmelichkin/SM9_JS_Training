//Advent of Code 2022
//Day 1

const fs = require('fs');

let inputfilename = "/uploads/input_my1.txt";



let groups = fs.readFileSync(inputfilename, "utf-8").split('\r\n\r\n' || '\n\r\n\r');
//console.log(groups);

let part1 = -Infinity;
let sum_all = [];
for (const group of groups) {
const answers = group.split('\r\n').map(Number);

//console.log(answers);
const elftotal = answers.reduce((acc,cur) => acc+=cur,0);

sum_all.push(elftotal);
//console.log(sum_all);
//console.log("elftotal=" + elftotal);

part1 = Math.max(part1, elftotal);

}
console.log('Part 1 :>> ', part1);

console.log(sum_all.sort(function(a, b){return b-a}));
let sum3 = 0;
for (var i = 0; i < 3; i++) {
    sum3 += sum_all[i];
}

console.log('Part 2 :>> ',sum3);