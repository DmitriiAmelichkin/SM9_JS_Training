//https://adventofcode.com/2022/day/3
//Task 3. Aleksander Iagofarov

//Export library
let util = require('./Util.js');

function calculateDuplicateItemPrior(items) {

    //Init priority of duplicate elements
    let duplicateItem;

    for (let i = 0; i < items.length; i++) {
        if (items.substring(items.length / 2).includes(items[i])) {
            duplicateItem = items[i];
            break;
        };
    }

    return getPriorityByAscii(duplicateItem) ;
}

function getPriorityByAscii(item) {
    const OFFSET_CAPITAL = 38;
    const OFFSET_LOWERCASE = 96;

    let itemCode = item.charCodeAt(0)

    //Convert ASCII code to priority
    if (itemCode > 96) {
        //ASCII range for a-z is 97-122
        return itemCode - OFFSET_LOWERCASE;
    } else {
        //ASCII range for A-Z is 65-90
        return itemCode - OFFSET_CAPITAL;
    }
}

function main() {
    //Read and split input data
    let aBackpacks = util.readInput('Task3.txt');

    //Part1
    let resultPart1 = 0;

    for (backpack of aBackpacks) {
        resultPart1 += calculateDuplicateItemPrior(backpack);
    }

    console.log("Part 1 result: " + resultPart1);

    //Part2
    let group_cursor = 0;
    let resultPart2 = 0;
    //Group level iteration
    while(group_cursor + 2 < aBackpacks.length){

        //Backpacks checking 
        for (let i = 0; i < aBackpacks[group_cursor].length; i++ ) {
            if ( aBackpacks[group_cursor + 1].includes(aBackpacks[group_cursor].charAt(i)) 
                && aBackpacks[group_cursor + 2].includes(aBackpacks[group_cursor].charAt(i))) {
                    resultPart2 += getPriorityByAscii(aBackpacks[group_cursor].charAt(i));
                    break;
                }
        }

        group_cursor += 3;
    }

    console.log("Part 2 result: " + resultPart2);
}

main();