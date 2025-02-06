const $themeToogleBtn = document.querySelector('.themeToogle')
let isDarkMode = false
$themeToogleBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode
  document.body.className = isDarkMode ? 'dark' : 'light'
})

let counterWins = 0
let counterLosses = 0
let counterTies = 0

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors']
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]

  let result = ''

  if (playerChoice === computerChoice) {
    result = "It's a tie! 🤝"
    counterTies++
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! 🎉 ${playerChoice} beats ${computerChoice}`
    counterWins++
  } else {
    result = `You lose! 😢 ${computerChoice} beats ${playerChoice}`
    counterLosses++
  }
  document.querySelector(
    '.game'
  ).innerHTML = `<strong>Player: ${playerChoice}</strong> <strong>Computer: ${computerChoice}</strong>`
  document.querySelector('.result').innerHTML = `
    <p style="font-size: 30px;">${result}</p>
    <strong style="color: green;">You've won: ${counterWins} times</strong>
    <strong style="color: red;">You've lost: ${counterLosses} times</strong>
    <strong style="color: orange;">Ties: ${counterTies}</strong>
  `
}
