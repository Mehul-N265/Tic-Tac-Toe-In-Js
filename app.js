const cells = document.querySelectorAll(".cell");
//doing basic styling
cells[2].style.borderRight = "none";
cells[5].style.borderRight = "none";
cells[8].style.borderRight = "none";
cells[8].style.borderBottom = "none";
cells[6].style.borderBottom = "none";
cells[7].style.borderBottom = "none";
// code begins here
const restartGrid = document.querySelector(".restartGrid");
const restartBtn = document.querySelector("#restart");
const checkTurnTextAndDeclareWinner = document.querySelector(
  "#whoseTurnAndWinOrLose"
);
let currentPlayerTurn; //if true then playerOne's Turn

startGame();

//startGame
function startGame() {
  currentPlayerTurn = true;
  playerOne();
  playerTwo();
}
function playerOne() {
  if (currentPlayerTurn) checkPlayerClick();
}
function playerTwo() {
  if (!currentPlayerTurn) {
    checkPlayerClick();
  }
}
function checkPlayerClick() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
      if (cells[i].textContent == "X" || cells[i].textContent == "O") {
        alert("Place Occupied");
      } else {
        if (currentPlayerTurn) {
          currentPlayerTurn = false;

          cells[i].textContent = "X";
          cells[i].style.color = "orange";
          checkTurnTextAndDeclareWinner.textContent = "Player O's turn"
          checkWin("X");
          checkDraw();

        } else {
          currentPlayerTurn = true;

          cells[i].textContent = "O";
          cells[i].style.color = "lawngreen";
          checkTurnTextAndDeclareWinner.textContent = "Player X's turn"
          checkWin("O");
          checkDraw();

        }
      }
    });
  }
}

function checkWin(playerName) {
  if (
    (cells[0].textContent == "X" &&
      cells[1].textContent == "X" &&
      cells[2].textContent == "X") ||
    (cells[0].textContent == "O" &&
      cells[1].textContent == "O" &&
      cells[2].textContent == "O")
  ) {
    alert(`Player ${playerName} Won`);
    restart();
  } else if (
    (cells[3].textContent == "X" &&
      cells[4].textContent == "X" &&
      cells[5].textContent == "X") ||
    (cells[3].textContent == "O" &&
      cells[4].textContent == "O" &&
      cells[5].textContent == "O")
  ) {
    alert(`Player ${playerName} Won`);
    restart();
  } else if (
    (cells[6].textContent == "X" &&
      cells[7].textContent == "X" &&
      cells[8].textContent == "X") ||
    (cells[6].textContent == "O" &&
      cells[7].textContent == "O" &&
      cells[8].textContent == "O")
  ) {
    alert(`Player ${playerName} Won`);
    restart();
  } else if (
    (cells[0].textContent == "X" &&
      cells[3].textContent == "X" &&
      cells[6].textContent == "X") ||
    (cells[0].textContent == "O" &&
      cells[3].textContent == "O" &&
      cells[6].textContent == "O")
  ) {
    alert(`Player ${playerName} Won`);
    restart();
  } else if (
    (cells[1].textContent == "X" &&
      cells[4].textContent == "X" &&
      cells[7].textContent == "X") ||
    (cells[1].textContent == "O" &&
      cells[4].textContent == "O" &&
      cells[6].textContent == "O")
  ) {
    alert(`Player ${playerName} Won`);
    restart();
  } else if (
    (cells[2].textContent == "X" &&
      cells[5].textContent == "X" &&
      cells[8].textContent == "X") ||
    (cells[2].textContent == "O" &&
      cells[5].textContent == "O" &&
      cells[8].textContent == "O")
  ) {
    alert(`Player ${playerName} Won`);
    restart();
  } else if (
    (cells[0].textContent == "X" &&
      cells[4].textContent == "X" &&
      cells[8].textContent == "X") ||
    (cells[0].textContent == "O" &&
      cells[4].textContent == "O" &&
      cells[8].textContent == "O")
  ) {
    alert(`Player ${playerName} Won`);
    restart();
  } else if (
    (cells[2].textContent == "X" &&
      cells[4].textContent == "X" &&
      cells[6].textContent == "X") ||
    (cells[2].textContent == "O" &&
      cells[4].textContent == "O" &&
      cells[6].textContent == "O")
  ) {
    alert(`Player ${playerName} Won`);
    restart();
  }
}
function restart() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    checkTurnTextAndDeclareWinner.textContent = "Player X's turn"

    currentPlayerTurn = true
  }
}
function checkDraw() {
  if (
    cells[0].textContent !== "" &&
    cells[1].textContent !== "" &&
    cells[2].textContent !== "" &&
    cells[6].textContent !== "" &&
    cells[7].textContent !== "" &&
    cells[8].textContent !== "" &&
    cells[3].textContent !== "" &&
    cells[4].textContent !== "" &&
    cells[5].textContent !== ""
  ) {
    alert("No player wins! Its a draw!");
    restart();
  }
}
restartBtn.addEventListener("click", restart);
