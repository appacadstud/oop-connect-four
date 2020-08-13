

import Game from './game.js';

  const player1 = document.getElementById("player-1-name");
  const player2 = document.getElementById("player-2-name");
  const boardHolder = document.getElementById("board-holder");
  const gameName = document.getElementById("game-name")
  const newButton = document.getElementById("new-game");
  const clickTargets = document.getElementById("click-targets");

  let game = undefined;

  const updateUI = function(currentPlayer) {
    if(game !== undefined) {
      boardHolder.classList.remove("is-invisible");
      gameName.innerHTML = game.getName();
    }

    if (currentPlayer === 1) {
      clickTargets.classList.add("black");
      clickTargets.classList.remove("red");
    } else {
      clickTargets.classList.add("red");
      clickTargets.classList.remove("black");
    };
  };

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

    game = new Game(player1.value, player2.value, 1);
    player1.value = "";
    player2.value = "";
    console.log(game);
    newButton.disabled = true;
    updateUI(1);
  });

  clickTargets.addEventListener("click", event => {

    game.playInColumn();
    updateUI(game.currentPlayer);
  });
});
