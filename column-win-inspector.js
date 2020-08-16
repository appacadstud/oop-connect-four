
export default class ColumnWinInspector {

    constructor(column) {

        this.column = column
    }

    inspect() {

        for(let columnIndex = 0; columnIndex < 3; columnIndex++) {
            let token1 = this.column.getTokenAt(columnIndex);
            let token2 = this.column.getTokenAt(columnIndex + 1);
            let token3 = this.column.getTokenAt(columnIndex + 2);
            let token4 = this.column.getTokenAt(columnIndex + 3);
            // console.log(token1)

        if(token1 !== "" && token1 === token2 && token2 === token3 && token3 === token4) {

            return token1;

        }
        }

        return 0;
    }

}
