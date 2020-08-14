
export default class Column {

    constructor() {

    this.array = ["", "", "", "", "", ""];

    };

    add(currentPlayer) {

        for (let i = 5; i >= 0; i--) {

            if (this.array[i] === "") {
              this.array[i] = currentPlayer;
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
