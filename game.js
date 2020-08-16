
import Column from './column.js';
import ColumnWinInspector from './column-win-inspector.js';
import RowWinInspector from './row-win-inspector.js';
import DiagonalWinInspector from './diagonal-win-inspector.js'

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

        if(this.winningNumber === 1) {
          return `Player 1: ${this.player1} wins!`;

        } else if(this.winningNumber === 2) {
          return `Player 2: ${this.player2} wins!`;
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
      this.checkForColumnWin();
      this.checkForRowWin();
      this.checkForDiagonalWin();
    };

    checkForTie() {

      let sum = 0;

      for (let i = 0; i <= 6; i++) {
        let column = this.columns[i];
        //console.log(column);
        if (column.isFull()) {
          sum += 1;
          //console.log(sum);
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

      if(this.winningNumber === 1 || this.winnerNumber === 2) {
        return true;
      }
      return this.columns[columnIndex].isFull();

    };

    checkForColumnWin() {

      if(this.winnerNumber !== 0) {

        return;
      }

      for(let columnIndex = 0; columnIndex < 7; columnIndex++) {

        let column = this.columns[columnIndex];
        let winInspector = new ColumnWinInspector(column);
        let winningNumber = winInspector.inspect();
        console.log(winningNumber);

        if(winningNumber === 1 || winningNumber === 2) {
          this.winningNumber = winningNumber;
          break; // <------ need this to break out of loop once you find a winner
        }
      }
    }

    checkForRowWin() {

      if(this.winnerNumber !== 0) {

        return;
      }

      for(let columnIndex = 0; columnIndex < 4; columnIndex++) {

        let columns = this.columns.slice(columnIndex, columnIndex + 4);
        let winInspector = new RowWinInspector(columns);
        let winningNumber = winInspector.inspect();
        console.log(winningNumber);

        if(winningNumber === 1 || winningNumber === 2) {
          this.winningNumber = winningNumber;
          // break; // <------ need this to break out of loop once you find a winner
        }
      }
    };

    checkForDiagonalWin() {

      if(this.winnerNumber !== 0) {

        return;
      }

      for(let columnIndex = 0; columnIndex < 4; columnIndex++) {

        let columns = this.columns.slice(columnIndex, columnIndex + 4);
        let winInspector = new DiagonalWinInspector(columns);
        let winningNumber = winInspector.inspect();
        console.log(winningNumber);

        if(winningNumber === 1 || winningNumber === 2) {
          this.winningNumber = winningNumber;
          // break; // <------ need this to break out of loop once you find a winner
        }
      }
    };
};
