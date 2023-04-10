//https://adventofcode.com/2022/day/2
//Task 2. Aleksander Iagofarov

//Export library
let util = require('./Util.js');

//Game rules data
const ROCK = 'A';
const PAPER = 'B';
const SCISSORS = 'C';
const PLAYER_ROCK = 'X';
const PLAYER_PAPER = 'Y';
const PLAYER_SCISSORS = 'Z';
const WIN_SCORE = 6;
const DRAW_SCORE = 3;

const Shapes = {

    //Map of weaker shapes
    weaker: new Map([
        [ROCK, SCISSORS],
        [PAPER, ROCK],
        [SCISSORS, PAPER]
    ]),

    //Map of stronger shapes
    stronger: new Map([
        [ROCK, PAPER],
        [PAPER, SCISSORS],
        [SCISSORS, ROCK]
    ]),

    //Player language translator
    playerToElvenTranslation: new Map([
        [PLAYER_ROCK, ROCK],
        [PLAYER_PAPER, PAPER],
        [PLAYER_SCISSORS, SCISSORS]
    ]),

    //Get shape that weaker tham
    getWeaker: function (shape) {
        return this.weaker.get(shape);
    },
    
    //Get shape that stronger tham
    getStronger: function (shape) {
        return this.stronger.get(shape);
    },

    //Shapes comparation
    compare: function (shape1, shape2) {

        if (shape1 === shape2) {
            return 0;
        }

        //Not draw
        return this.getWeaker(shape1) === shape2 ? 1 : -1;
    },

    //From XYZ to ABC
    playerShapeTranslate(shape) {
        return this.playerToElvenTranslation.get(shape);
    }
}

const Scores = {

    //Scores for different turns
    scoresForShape: new Map([
        [ROCK, 1],
        [PAPER, 2],
        [SCISSORS, 3]
    ]),

    //Player and opponent scores
    scores: { opponent: 0, player: 0 },

    addScoresForShapes(opponent_shape, player_shape) {
        this.scores.opponent += this.scoresForShape.get(opponent_shape);
        this.scores.player += this.scoresForShape.get(player_shape);
    },

    addScoresForTurn(opponentWins, playerWins) {
        if (!opponentWins && !playerWins) {
            this.scores.opponent += DRAW_SCORE;
            this.scores.player += DRAW_SCORE;
        } else if (opponentWins)
            this.scores.opponent += WIN_SCORE;
        else
            this.scores.player += WIN_SCORE;
    }
}

function main() {

    //Codes for extended task
    const PLAYER_LOOSE = 'X';
    const PLAYER_DRAW = 'Y';
    const PLAYER_WIN = 'Z';

    //When true - use logic according to second part of the task
    let partTwoLogicIsAtive = true;

    //Read and split input data
    let aTurns = util.readFile('Task2.txt').split('\r\n');

    for (let turn of aTurns) {
        //Parse current string
        let aCurrentTurn = turn.split(' ');

        let opponent_shape = aCurrentTurn[0];
        let player_shape;

        //Transform player input to player shape
        if (partTwoLogicIsAtive) {
            //Choose player shape
            switch (aCurrentTurn[1]) {
                case PLAYER_WIN:
                    player_shape = Shapes.getStronger(opponent_shape);
                    break;
                case PLAYER_LOOSE:
                    player_shape = Shapes.getWeaker(opponent_shape);
                    break;
                case PLAYER_DRAW:
                    player_shape = opponent_shape;
                    break;
            }
        } else {
            //Translate player shape from XYZ to ABC
            player_shape = Shapes.playerShapeTranslate(aCurrentTurn[1]);
        }

        //Points for turn
        Scores.addScoresForShapes(opponent_shape, player_shape);

        //Who is winner
        let comparation_result = Shapes.compare(opponent_shape, player_shape);

        //Points for win
        Scores.addScoresForTurn(comparation_result === 1, comparation_result === -1);

    }

    //Show result
    console.log("Opponent scores: " + Scores.scores.opponent);
    console.log("Player scores: " + Scores.scores.player);
    console.log("----------------");

    if (Scores.scores.opponent === Scores.scores.player)
        console.log("Result: Draw");
    else
        console.log(Scores.scores.player > Scores.scores.opponent ? "Player wins" : "Opponent wins");

}

main();