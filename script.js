const totalScore = { playerScore: 0, computerScore: 0 };

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * rpsChoice.length);
  totalScore["computerScore"] = randomNumber;
  return rpsChoice[randomNumber];
}
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0;
    // All situations where human wins, set `score` to 1
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    score = 1;
    // Otherwise human loses (aka set score to -1)
  } else {
    score = -1;
  }
  // return score
  return score;
}
// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // on a score of -1
  // You should do result.innerText = 'You Lose!'
  const resultDiv = document.getElementById("result");
  if (score == 1) {
    resultDiv.innerText = "You Win!";
  } else if (score == -1) {
    resultDiv.innerText = "You Lose!";
  } else {
    resultDiv.innerText = "It's a tie!";
  }
  const playerScoreDiv = document.getElementById("player-score");
  playerScoreDiv.innerText = `My Score: ${score}`;
  const totalPlayerScoreDiv = document.getElementById("total-player-score");
  totalPlayerScoreDiv.innerText = `My Total Score: ${totalScore["playerScore"]}`;
  const computerScoreDiv = document.getElementById("computer-score");
  computerScoreDiv.innerText = `Random Score: ${totalScore["computerScore"]}`;
  const handsDiv = document.getElementById("hands");
  handsDiv.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
}
// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({ playerChoice });
  const computerChoice = getComputerChoice();
  console.log({ computerChoice });
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;

  console.log({ score });
  console.log({ totalScore });
  showResult(score, playerChoice, computerChoice);
}
// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll(".rpsButton");
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'onclick' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });
  // Add a click listener to the end game button that runs the endGame() function on click
  const endGameBtn = document.getElementById("endGameButton");
  endGameBtn.onclick = () => endGame();
}
// ** endGame function clears all the text on the DOM **
function endGame() {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;

  const playerScoreDiv = document.getElementById("player-score");
  const totalPlayerScoreDiv = document.getElementById("total-player-score");
  const computerScoreDiv = document.getElementById("computer-score");
  const handsDiv = document.getElementById("hands");
  const resultDiv = document.getElementById("result");

  resultDiv.innerText = "";
  handsDiv.innerText = "";
  playerScoreDiv.innerText = "";
  totalPlayerScoreDiv.innerText = "";
  computerScoreDiv.innerText = "";
  computerScoreDiv.innerText = "";
}

playGame();
