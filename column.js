
export default class Column {

    constructor() {

    this.array = ["", "", "", "", "", ""];

    };

    add(currentPlayer) {

        for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {

            if (this.array[rowIndex] === "") {
              this.array[rowIndex] = currentPlayer;
              break;

            }
        }
    };

    getTokenAt(rowIndex) {

        return this.array[rowIndex];

    }

    isFull() {

        return this.array[0] !== "";

    };

};
