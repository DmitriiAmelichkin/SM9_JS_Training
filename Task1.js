//https://adventofcode.com/2022/day/1
//Task 1. Aleksander Iagofarov

//Export library
let util = require('./Util.js');

//Read and split input data
let aItems = util.readFile('Task1.txt').split('\r\n')

//Top 3 elves collection
let topElves = {
    top: [0, 0, 0],
    add: function(item) {
        this.top[0] = item;
        this.top.sort();
    },
    getMin: function() {
        return this.top[0];
    },
    getAll: function() {
        return this.top;
    },
    getSum: function() {
        return this.top[0] + this.top[1] + this.top[2];
    }
}

let current = 0;

//Calculate
for (let item of aItems) { 
    if (item === '') {
        if (current > topElves.getMin()) 
            topElves.add(current);
        current = 0;
    } else {
        current += Number(item);
    }
}

//Show result
console.log("Top carriers: " + topElves.getAll());
console.log("Total: " + topElves.getSum());