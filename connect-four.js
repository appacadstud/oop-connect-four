window.addEventListener("DOMContentLoaded", event => {
  const game = undefined;
  const player1 = document.getElementById("player-1-name");
  const player2 = document.getElementById("player-2-name");
  const newButton = document.getElementById("new-game");

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

  })
});
