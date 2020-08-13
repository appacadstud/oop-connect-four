
export default class Game {
    constructor(player1, player2) {

        this.player1 = player1;
        this.player2 = player2;
    } 

    getName() {

        return `Player 1: ${this.player1} vs. Player 2: ${this.player2}`
    }
}

