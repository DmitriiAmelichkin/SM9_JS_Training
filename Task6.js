//https://adventofcode.com/2022/day/6
//Task 6. Aleksander Iagofarov

//Export library
let util = require('./Util.js');

const MARKER_LENGTH = 14;

function MarkerFinder() {
    let stack = [];

    this.push = (char) => {
        stack.unshift(char);
        if (stack.length > MARKER_LENGTH) {
            stack.pop();
        }
    };

    this.isMarker = () => {

        if (stack.length != MARKER_LENGTH) return false;

        for (let i = 0; i < MARKER_LENGTH; i++) {
            for (let j = i + 1; j < MARKER_LENGTH; j++) {
                if (stack[i] === stack[j]) return false;
            }
        }
        return true;
    }
}


function main() {
    //Read and split input data
    let aTransmission = util.readInput('Task6.txt');

    let result;

    let oMarkerFinder = new MarkerFinder();

    for (let i = 0; i < aTransmission[0].length; i++) {
        oMarkerFinder.push(aTransmission[0].charAt(i));
        if (oMarkerFinder.isMarker()) {
            result = i;
            break;
        };
    }

    console.log("Marker is detected. Characters processed: " + result);
}

main();