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

function Shapes() {

    //Map of weaker shapes
    let weaker = new Map([
        [ROCK, SCISSORS],
        [PAPER, ROCK],
        [SCISSORS, PAPER]
    ]);

    //Map of stronger shapes
    let stronger = new Map([
        [ROCK, PAPER],
        [PAPER, SCISSORS],
        [SCISSORS, ROCK]
    ]);

    //Player language translator
    let playerToElvenTranslation = new Map([
        [PLAYER_ROCK, ROCK],
        [PLAYER_PAPER, PAPER],
        [PLAYER_SCISSORS, SCISSORS]
    ]);

    //From XYZ to ABC
    this.playerShapeTranslate = (shape) => playerToElvenTranslation.get(shape);
    
    //Get shape that weaker than
    this.getWeaker = (shape) => weaker.get(shape);
    
    //Get shape that stronger than
    this.getStronger = (shape) => stronger.get(shape);

    //Shapes comparation
    this.compare = function (shape1, shape2) {

        if (shape1 === shape2) {
            return 0;
        }

        //Not draw
        return this.getWeaker(shape1) === shape2 ? 1 : -1;
    }
}

function Scores() {

    const WIN_SCORE = 6;
    const DRAW_SCORE = 3;

    //Scores for different turns
    let scoresForShape = new Map([
        [ROCK, 1],
        [PAPER, 2],
        [SCISSORS, 3]
    ]);

    //Player and opponent scores
    let scores = { opponent: 0, player: 0 };

    this.getScoresOpponent = () => scores.opponent;
    this.getScoresPlayer = () => scores.player;    

    this.addScoresForShapes = (opponent_shape, player_shape) => {
        scores.opponent += scoresForShape.get(opponent_shape);
        scores.player += scoresForShape.get(player_shape);
    },

    this.addScoresForTurn = (opponentWins, playerWins) => {
        if (!opponentWins && !playerWins) {
            scores.opponent += DRAW_SCORE;
            scores.player += DRAW_SCORE;
        } else if (opponentWins)
            scores.opponent += WIN_SCORE;
        else
            scores.player += WIN_SCORE;
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
    let aTurns = util.readInput('Task2.txt');

    let scores = new Scores();
    let shapes = new Shapes();

    for (let turn of aTurns) {
        //Parse current turn
        let aCurrentTurn = turn.split(' ');

        let opponent_shape = aCurrentTurn[0];
        let player_shape;

        //Transform player input to player shape
        if (partTwoLogicIsAtive) {
            //Choose player shape
            switch (aCurrentTurn[1]) {
                case PLAYER_WIN:
                    player_shape = shapes.getStronger(opponent_shape);
                    break;
                case PLAYER_LOOSE:
                    player_shape = shapes.getWeaker(opponent_shape);
                    break;
                case PLAYER_DRAW:
                    player_shape = opponent_shape;
                    break;
            }
        } else {
            //Translate player shape from XYZ to ABC
            player_shape = shapes.playerShapeTranslate(aCurrentTurn[1]);
        }

        //Points for turn
        scores.addScoresForShapes(opponent_shape, player_shape);

        //Who is winner
        let comparation_result = shapes.compare(opponent_shape, player_shape);

        //Points for win
        scores.addScoresForTurn(comparation_result === 1, comparation_result === -1);

    }

    //Show result
    console.log("Opponent scores: " + scores.getScoresOpponent());
    console.log("Player scores: " + scores.getScoresPlayer());
    console.log("----------------");

    if (scores.getScoresOpponent() === scores.getScoresPlayer())
        console.log("Result: Draw");
    else
        console.log(scores.getScoresPlayer() > scores.getScoresOpponent() ? "Player wins" : "Opponent wins");

}

main();