//https://adventofcode.com/2022/day/1
//Task 1. Aleksander Iagofarov

//Export library
let util = require('./Util.js');

//Top 3 elves collection
function TopElves() {
    let that = this;
    let top = [0, 0, 0];

    this.add = (item) => {
        top[0] = item;
        top.sort();
    },

    this.getMin = () => top[0];

    this.getAll = () => top;

    this.getSum = () => top[0] + top[1] + top[2];
}

function main() {

    //Read and split input data
    let aItems = util.readInput('Task1.txt');

    let currentItemSum = 0;

    let topElves = new TopElves();

    //Calculate
    for (let item of aItems) {
        if (item === '') {
            if (currentItemSum > topElves.getMin())
                topElves.add(currentItemSum);
            currentItemSum = 0;
        } else {
            currentItemSum += Number(item);
        }
    }

    //Show result
    console.log("Top carriers: " + topElves.getAll());
    console.log("Total: " + topElves.getSum());
}

main();