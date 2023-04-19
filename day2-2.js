//Advent of Code 2022
//Day 2

const fs = require('fs');

let inputfilename = "/uploads/input_my2.txt";


let groups = fs.readFileSync(inputfilename, "utf-8").split('\r\n\r\n' || '\n\r\n\r');
//console.log(groups);

let groups1=[];

for (var i=0;i < groups[0].length; i++) {
    if (groups[0].charAt(i) == " " || groups[0].charAt(i) == "\n" || groups[0].charAt(i) == "\r") {
        continue;
    } else {
    
   groups1.push(groups[0].charAt(i));
    }
}


//console.log(groups1);
let elf1 = [];
let elf2 = [];

for (var i = 0; i < groups1.length; i++) {
    
    
    if (i%2==0) {
        elf1.push(groups1[i].toUpperCase());
    } else {
        elf2.push(groups1[i].toUpperCase());
    }
}

//console.log(elf1);
//console.log(elf2);
let score1 = 0;
let score2 = 0;
let score3 = 0; // Added for Part2 task

for (var i=0; i<elf1.length; i++) {
    if (elf1[i] === "A" &&  elf2[i] === "Y") {
        score2 += 2 + 6;
        score1 += 1;
        
        score3 += 1 + 3;
    }
    if (elf1[i] === "A" &&  elf2[i] === "Z") {
        score1 += 1 + 6;
        score2 += 3;
        
        score3 += 2 + 6;
    }
    
    if (elf1[i] === "B" &&  elf2[i] === "X") {
        score1 += 2 + 6;
        score2 += 1;
        
        score3 += 1;
    }
    if (elf1[i] === "B" &&  elf2[i] === "Z") {
        score2 += 3 + 6;
        score1 += 2;
        
        score3 += 3 + 6;
    }
    if (elf1[i] === "C" &&  elf2[i] === "X") {
        score2 += 1 + 6;
        score1 +=3;
        
        score3 += 2;
    }
    if (elf1[i] === "C" &&  elf2[i] === "Y") {
        score1 = 3 + 6;
        score2 += 2;
        
        score3 += 3 + 3;
    }
    
    if (elf1[i] === "A" && elf2[i] === "X") {
        score1 += 1 + 3;
        score2 += 1 + 3;
        
        score3 += 3;
    }
    
     if (elf1[i] === "B" && elf2[i] === "Y") {
        score1 += 2 + 3;
        score2 += 2 + 3;
        
        score3 += 2 + 3;
    }
    
    if (elf1[i] === "C" && elf2[i] === "Z") {
        score1 += 3 + 3;
        score2 += 3 + 3;
        
        score3 += 1 + 6;
    }
    
    
    
}

console.log("elf1: " + score1);
console.log("my_score-Part1: " + score2);

console.log("my_score-Part2: " + score3);


