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

    //Part 1
    function calculation(i, j, max) {
        if (map[i][j].size <= max) {
            map[i][j].invisibility++;
        } else {
            max = map[i][j].size;
        }

        return max;
    }

    function showVisMap() {
        for (line of map) {
            let str = '';
            for (tree of line) {
                str += tree.invisibility;
            }
            console.log(str);
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
            max_bottom = calculation(map_size - j - 1, i, max_bottom);

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

    console.log("Amount of visible trees is: " + result);


    //Part 2

    function calculateVisibilityScore(posX, posY) {

        let result_l = 0;
        let result_r = 0;
        let result_t = 0;
        let result_b = 0;

        let tree_size = map[posX][posY].size;

        //Left
        for (let i = posX - 1; i >= 0; i--) {
            result_l++
            if (map[i][posY].size >= tree_size)
                break;
        }

        //Right
        for (let i = posX + 1; i < map_size; i++) {
            result_r++;
            if (map[i][posY].size >= tree_size) {
                break;
            }
        }

        //Top
        for (let i = posY - 1; i >= 0; i--) {
            result_t++;
            if (map[posX][i].size >= tree_size)
                break;

        }

        //Bottom
        for (let i = posY + 1; i < map_size; i++) {
            result_b++;
            if (map[posX][i].size >= tree_size)
                break;
        }

        return result_l * result_r * result_t * result_b;
    }




    let maxScore = 0;

    for (let i = 0; i < map_size; i++) {
        for (let j = 0; j < map_size; j++) {

            if (i > 2 && j > 2) {
                console.log('Got it!');
            }
            let score = calculateVisibilityScore(i, j);
            if (score > maxScore)
                maxScore = score;
        }
    }

    console.log("Max possible result: " + maxScore);
}

main();