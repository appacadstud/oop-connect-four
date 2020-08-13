

import Game from './game.js';

  const player1 = document.getElementById("player-1-name");
  const player2 = document.getElementById("player-2-name");
  const boardHolder = document.getElementById("board-holder");
  const gameName = document.getElementById("game-name")
  const newButton = document.getElementById("new-game");
  
  let game = undefined;

  const updateUI = function() {
    if(game !== undefined) {
      boardHolder.classList.remove("is-invisible");
      gameName.innerHTML = game.getName();      
  }
}

window.addEventListener("DOMContentLoaded", event => {
  
  player1.addEventListener("keyup", event => {

    if (player1.value !== "" && player2.value !== "") {
      newButton.disabled = false;
    };
  });

  player2.addEventListener("keyup", event => {

    if (player1.value !== "" && player2.value !== "") {
      newButton.disabled = false;
    };
  });

  newButton.addEventListener("click", event => {
    game = new Game("","");
    //console.log(game);
    newButton.disabled = true;
    updateUI()
  })
});

