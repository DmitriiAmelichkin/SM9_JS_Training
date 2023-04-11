//https://adventofcode.com/2022/day/5
//Task 5. Aleksander Iagofarov

//Export library
let util = require('./Util.js');

const CRATES_NUMBERS_LINE = ' 1   2   3   4   5   6   7   8   9 ';

function Storage(aData) {

    let stacks = [
        [], [], [], [], [], [], [], [], []
    ];

    let getOffset = function (index) {
        return CRATES_NUMBERS_LINE.indexOf(index);
    };

    //Parsing line till the digits
    for (line of aData) {
        if (line === CRATES_NUMBERS_LINE) break;
        for (let i = 0; i < 9; i++) {
            let symbol = line.charAt(getOffset(i + 1));
            if (symbol != ' ') stacks[i].unshift(symbol);
        }
    };

    this.runMovement = (inputData) => {
        let index_begin = inputData.indexOf(CRATES_NUMBERS_LINE) + 2;

        for (let i = index_begin; i < inputData.length; i++) {
            //Parse
            let amount = Number(inputData[i].split(' ')[1]);
            let from = Number(inputData[i].split(' ')[3]);
            let to = Number(inputData[i].split(' ')[5]);

            //Move Part 1
            //for (let j = 0; j < amount; j++) {
            //    stacks[to - 1].push(stacks[from - 1].pop());
            //}

            //Move Part 2
            let cratesToMove = stacks[from - 1].splice( -amount, amount);
            stacks[to - 1] = stacks[to - 1].concat(cratesToMove);
        }
    };

    this.getTopElementsAsString = () => {
        let result = '';
        for (let i = 0; i < 9; i++) {
            result += stacks[i][stacks[i].length - 1];
        }
        return result;
    };

}

function main() {
    //Read and split input data
    let aInputData = util.readInput('Task5.txt');

    let storage = new Storage(aInputData);

    storage.runMovement(aInputData);

    console.log(storage.getTopElementsAsString());
}

main();