const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const playerHistory = document.querySelector(".player-history");
const computerHistory = document.querySelector(".computer-history");

rock.addEventListener("click", () => {
  round("rock");
});
paper.addEventListener("click", () => {
  round("paper");
});
scissors.addEventListener("click", () => {
  round("scissors");
});

//create a random choice for the computer
function computerChoice() {
  let x = Math.floor(Math.random() * 3 + 1);
  const computer = {
    1: "rock",
    2: "paper",
    3: "scissors",
  };
  return computer[x];
}

//play one round
function round(player) {
  //get computer choice
  let computer = computerChoice();
  const computerH = document.createElement("div");
  computerH.setAttribute('class','computerH');
  computerH.textContent = computer;
  computerHistory.append(computerH);
  const playerH = document.createElement("div");
  playerH.setAttribute('class','playerH');
  playerH.textContent = player;
  playerHistory.append(playerH);
  if (player == computer) {
    return tie();
  } else if (player == "rock") {
    if (computer == "paper") {
      return computerWins(player, computer);
    } else {
      return playerWins(player, computer);
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      return computerWins(player, computer);
    } else {
      return playerWins(player, computer);
    }
  } else if (player == "scissors") {
    if (computer == "rock") {
      return computerWins(player, computer);
    } else {
      return playerWins(player, computer);
    }
  }
}

//if player and computer has the same choice
function tie() {
  //create a new div under scoreboard to produce the result
  const content = document.createElement("div");
  content.setAttribute('class','score');
  content.textContent = "It's a tie!!!";
  result.append(content);
}

function computerWins(player, computer) {
  //add computer winning text
  const content = document.createElement("div");
  content.setAttribute('class','score');
  content.textContent = "Computer scored!!!";
  result.append(content);
  //add score to computer
  let score = +document.getElementById("computer").textContent;
  document.getElementById("computer").innerHTML = score + 1;
  //a different text when computer wins
  if (score > 3) {
    content.textContent = "Computer wins!!!";
    result.append(content);
    disabled();
  }
}

function playerWins() {
  //add player winning text
  const content = document.createElement("div");
  content.setAttribute('class','score');
  content.textContent = "Player scored!!!";
  result.append(content);
  //add score to player
  let score = +document.getElementById("player").textContent;
  document.getElementById("player").innerHTML = score + 1;
  if (score > 3) {
    content.textContent = "Player wins!!!";
    result.append(content);
    disabled();
  }
}

//disable buttons after someone wins
function disabled() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
  const playAgain = document.createElement("button");
  playAgain.textContent = "CLICK TO PLAY AGAIN!!!";
  playAgain.setAttribute("style", "width: 200px;");
  playAgain.setAttribute("classs", "replay");
  playAgain.onclick = function () {
    replay(playAgain);
  };
  result.append(playAgain);
}

function replay(playAgain) {
  result.removeChild(playAgain);
  let score = document.querySelectorAll(".score");
  let playerH = document.querySelectorAll(".playerH");
  let computerH = document.querySelectorAll(".computerH");
for (let i = 0; i < score.length; i++) {
  result.removeChild(score[i]);
  playerHistory.removeChild(playerH[i]);
  computerHistory.removeChild(computerH[i]);
}
  document.getElementById("player").innerHTML = 0;
  document.getElementById("computer").innerHTML = 0;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}
