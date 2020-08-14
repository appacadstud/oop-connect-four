
import Column from './column.js';

export default class Game {

    constructor(player1, player2, currentPlayer) {

        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = currentPlayer;
        this.columns = [new Column(), new Column(), new Column(),  new Column(),
          new Column(), new Column(),  new Column(),];
        this.winnerNumber = 0;

    };

    getName() {

        if (this.winnerNumber === 3) {
          return `${this.player1} ties with ${this.player2}`;
        }

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
      }

      this.checkForTie();
    };

    checkForTie() {

      let sum = 0;

      for (let i = 0; i <= 6; i++) {
        let column = this.columns[i];
        console.log(column);
        if (column.isFull()) {
          sum += 1;
          console.log(sum);
        }
      }

      if (sum === 7) {
        this.winnerNumber = 3;
      }
    }

    getTokenAt(rowIndex, columnIndex) {

      return this.columns[columnIndex].getTokenAt(rowIndex);

    };

    isColumnFull(columnIndex) {

      return this.columns[columnIndex].isFull();

    };

};
