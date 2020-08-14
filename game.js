
import Column from './column.js'

export default class Game {
    constructor(player1, player2, currentPlayer) {

        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = currentPlayer;
        this.columns = [new Column(), new Column(), new Column(),  new Column(),
          new Column(), new Column(),  new Column(),];
    }

    getName() {

        return `Player 1: ${this.player1} vs. Player 2: ${this.player2}`;
    };

    playInColumn(columnIndex) {

      this.columns[columnIndex].add(this.currentPlayer);

      if (this.currentPlayer === 1) {
        this.currentPlayer = 2;
        //console.log(this.currentPlayer);
      } else {
        this.currentPlayer = 1;
        //console.log(this.currentPlayer);
      };
    };

    getTokenAt(rowIndex, columnIndex) {

      return this.columns[columnIndex].getTokenAt(rowIndex);
      
    }
};
