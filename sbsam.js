let sum = 0
let array = ["", "", "", "", "", "", ""]
console.log(array);

// function fillTracking () {

//     if (array.length < 1) {
//         //column full
//     }

//     for (let i = 0; i < array.length; i++) {
//       let boardSpot = array[i];
//       if (boardSpot !== "") {
//         array.pop()
//       }
//     }
//     return array
//   }

  //console.log(fillTracking())

function columnDrop(playerNum) {

       for (let i = array.length -1; i > 0; i -= array.length) {

        let boardSpot = array[i];

        if (boardSpot === "") {
             array.splice(0, boardSpot)
             array.unshift(playerNum)
             array.pop()
            //array.splice(boardSpot,array.length - 1)

            // array.splice(0, boardSpot)
            // array.push(playerNum)
            // array.unshift()
         }

      }

      return array

    }

    console.log(columnDrop(1))
    console.log(columnDrop(2))
    console.log(columnDrop(2))

    // function columnTop(playerNum) {
    //     let sum = 0
    //     for (let i = 0; i < array.length; i++) {

    //      let boardSpot = array[i];
    //      let spliceSpot = array[i - 1]
    //      if (boardSpot !== "") {
    //         //console.log(spliceSpot)
    //         //array.shift()
    //         console.log(sum)
    //         //array.splice(0, i, playerNum)
    //         array.splice(sum, i, playerNum)
    //         sum += 1
    //         //array.splice(spliceSpot, 1, playerNum)
    //         //array.splice(spliceSpot + 1)
    //         //array.unshift(playerNum)
    //         //  array.unshift(playerNum)
    //         //  array.splice(0,boardSpot)
    //         //  array.shift()
    //         //  array.splice("", array.length)
    //       }
    //      // else if (boardSpot !== "") {
    //      //     array.unshift("")
    //      // }

    //    }

    //    return array

    //  }

    //  console.log(columnTop(1))
    //  console.log(columnTop(2))
    //  console.log(columnTop(1))
