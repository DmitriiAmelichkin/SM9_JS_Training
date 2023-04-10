//https://adventofcode.com/2022/day/4
//Task 4. Aleksander Iagofarov

//Export library
let util = require('./Util.js');

function isNested(range1, range2) {
    if (range1.begin <= range2.begin && range1.end >= range2.end ) return true;
}

function main() {
    //Read and split input data
    let aAssignmentPairs = util.readInput('Task4.txt');

    let resultForPart1 = 0;
    let resultForPart2 = 0;

    for(assignmentPair of aAssignmentPairs) {
        let range1 = {
            begin: Number(assignmentPair.split(',')[0].split('-')[0]),
            end: Number(assignmentPair.split(',')[0].split('-')[1])
        };
        let range2 = {
            begin: Number(assignmentPair.split(',')[1].split('-')[0]),
            end: Number(assignmentPair.split(',')[1].split('-')[1])
        }

        if (isNested(range1, range2) || isNested(range2, range1)) {
            resultForPart1++;
            resultForPart2++;
        } else {
            //Is range 1 begins or ends inside of range 2
            if( range1.begin >= range2.begin && range1.begin <= range2.end 
                || range1.end >= range2.begin && range1.end <= range2.end) resultForPart2++;
             
        }
    }

    console.log("Part 1 result: " + resultForPart1);
    console.log("Part 2 result: " + resultForPart2);

}

main();