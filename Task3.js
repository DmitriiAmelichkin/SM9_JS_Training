//https://adventofcode.com/2022/day/3
//Task 2. Aleksander Iagofarov
//Export library
let util = require('./Util.js');

function calculateDuplicateItemPrior(items) {

    const OFFSET_CAPITAL = 38;
    const OFFSET_LOWERCASE = 96;

    //Init priority of duplicate elements
    let duplicateItem;

    for (let i = 0; i < items.length; i++) {
        if (items.substring(items.length / 2).includes(items[i])) {
            duplicateItem = items[i];
            break;
        };
    }

    //Get ASCII
    let duplicateItemCode = duplicateItem.charCodeAt(0);

    //Convert code to priority
    if (duplicateItemCode > 96) {
        //ASCII range for a-z is 97-122
        return duplicateItemCode - OFFSET_LOWERCASE;
    } else {
        //ASCII range for A-Z is 65-90
        return duplicateItemCode - OFFSET_CAPITAL;
    }

}

function main() {
    //Read and split input data
    let aBackpacks_str = util.readFile('Task3.txt').split('\r\n');

    let result = 0;

    for (backpack_str of aBackpacks_str) {
        result += calculateDuplicateItemPrior(backpack_str);
    }

    console.log("Result: " + result);

}

main();