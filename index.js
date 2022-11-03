let PLAYER_NAME, PLAYER_LEVEL, PLAYER_POINTS, MIN_RANGE, MAX_RANGE, SECRET_NUMBER, NO_OF_LIVES;

//Prompt for username
PLAYER_NAME = prompt("Hello What is your name?");

while (!PLAYER_NAME) {
  PLAYER_NAME = prompt("Can't play the game without your name?");
}
main();

function main() {
  PLAYER_LEVEL = 1;
  PLAYER_POINTS = 0;
  MIN_RANGE = 1;
  MAX_RANGE = 2
  NO_OF_LIVES = 3
  SECRET_NUMBER = generateNewSecretNumber()

  welcome()
  outputResult()
  collectAnswer()

  function collectAnswer() {
    let response = prompt(`Try to guess my number, its between ${MIN_RANGE} and ${MAX_RANGE}.`)
    while (response !== SECRET_NUMBER) {
      if (NO_OF_LIVES <= 0) {
        playerLoose()
        break
      }
      else if (Number.isNaN(parseInt(response))) {
        response = prompt('Try to guess a number')
      } else if (response > SECRET_NUMBER) {
        --NO_OF_LIVES
        response = prompt('Too high, try lower')
      } else if (response < SECRET_NUMBER) {
        --NO_OF_LIVES
        response = prompt('Too low, try higher')
      } else {
        playerWin()
        break
      }
    }
  }

  function playerWin() {
    console.log('You guessed the right number!')
    let response = prompt("Press Enter Key")
    console.log('Want to try a new level?')
    response = prompt("Press Enter Key")
    PLAYER_LEVEL++
    PLAYER_POINTS++
    MAX_RANGE++
    SECRET_NUMBER = generateNewSecretNumber()

    NO_OF_LIVES = 3 + Math.floor(PLAYER_LEVEL / 3)

    outputResult()
    collectAnswer()
  }

  function playerLoose() {
    console.log('You\'ve run out of lives')
    console.log('Nice try, GAME OVER!')
    outputResult()
    console.log("Press Run to play again")
    return
  }
  function outputResult() {
    console.table({
      Player: PLAYER_NAME,
      Level: PLAYER_LEVEL,
      Points: PLAYER_POINTS
    })
  }

  function generateNewSecretNumber() {
    return Math.floor(Math.random() * (MAX_RANGE - MIN_RANGE + 1) + MIN_RANGE);
  }

}

function welcome() {
  console.log(`Hello ${PLAYER_NAME}!, Welcome to my guessing game!`)
  let response = prompt('Press Enter Key')
  console.log("I will think of a number, and you have to try and guess it!")
  response = prompt('Press Enter Key')
  console.log('The rule is; You have 3 lives for starters, then you get an aditional life for every 3 levels you pass.')
  response = prompt('Press Enter Key')
}