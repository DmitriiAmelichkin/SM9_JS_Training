//https://adventofcode.com/2022/day/8
//Task 8. Aleksander Iagofarov

//Export library
let util = require('./Util.js');

function main() {
    //Read and split input data
    let aInput = util.readInput('Task8.txt');

    let map_size = aInput.length;

    //Init map
    let map = [];
    for (let i = 0; i < map_size; i++) {
        map.push([]);
    }

    //Parse to array
    for (let i = 0; i < map_size; i++) {
        let line = aInput[i];
        for (let j = 0; j < map_size; j++) {
            map[i][j] = { size: line.charAt(j), invisibility: 0 };
        }
    }


    function calculation(i, j, max) {
        if (map[i][j].size <= max) {
            map[i][j].invisibility++;
        } else {
            max = map[i][j].size;
        }

        return max;
    }

    function showVisMap() {
        for(line of map) { 
            let str = '';
            for (tree of line) {
                str+=tree.invisibility;
            }
            console.log(str) ;
        };
    }

    //Calculate invisibility scores

    for (let i = 0; i < map_size; i++) {
        let max_left = -1;
        let max_right = -1;
        let max_top = -1;
        let max_bottom = -1;
        for (let j = 0; j < map_size; j++) {
            max_left = calculation(i, j, max_left);
            max_right = calculation(i, map_size - j - 1, max_right);
            max_top = calculation(j, i, max_top);
            max_bottom = calculation( map_size - j - 1, i, max_bottom);

            //console.log("i=  "+i+" j="+j);
            //showVisMap();
            //console.log("------");
        }

        

    }

    //Count trees with invisibility scores < 4
    let result = 0;
    for (let i = 0; i < map_size; i++) {
        for (let j = 0; j < map_size; j++) {
            if (map[i][j].invisibility < 4) result++;
        }
    }

    console.log("Amount of visible trees is: " + result );

    
    //showVisMap();

}
main();