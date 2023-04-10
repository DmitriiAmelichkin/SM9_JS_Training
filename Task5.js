//https://adventofcode.com/2022/day/5
//Task 5. Aleksander Iagofarov

//Export library
let util = require('./Util.js');

const CRATES_NUMBERS_LINE = ' 1   2   3   4   5   6   7   8   9 ';


function Storage(aData){
    let line_cursor = 0;
    
    let stacks = [ [],[],[],[],[],[],[],[],[] ];

    let getOffset = function(index) {
        return CRATES_NUMBERS_LINE.indexOf(index);
    }

    //Parsing line till the digits
    let stop = false;
    for(line of aData) {
        if (line === CRATES_NUMBERS_LINE) break;
        for (let i = 0; i < 9; i++) {
            let symbol = line.charAt(getOffset(i+1));
            if (symbol && symbol != ' ') stacks[i].push(symbol);
        }
    }
}

function main() {
    //Read and split input data
    let aInputData = util.readInput('Task5.txt');

    let storage = Storage(aInputData);

}

main();