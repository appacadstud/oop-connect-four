
export default class Column {
    
    constructor() {
    this.array = ["", "", "", "", "", ""]
    }

    add(currentPlayer) {

        for (let i = 5; i >= 0; i--) {

            if (array[i] === "") {
              array[i]  = currentPlayer;
              break
    
            }
          }
         }

         getToken(rowIndex) {

            return this.array[rowIndex];
    
        }


    }

    


