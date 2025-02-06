const $themeToogleBtn = document.querySelector('.themeToogle')
let isDarkMode = false
$themeToogleBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode
  document.body.className = isDarkMode ? 'dark' : 'light'
})

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"]
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]

  let result = ''

  if (playerChoice === computerChoice) {
    result = 'It\'s a tie! 🤝'
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! 🎉 ${playerChoice} beats ${computerChoice}`
  } else {
    result = `You lose! 😢 ${computerChoice} beats ${playerChoice}`
  }
  document.querySelector('.game').innerHTML = `<strong>Player: ${playerChoice}</strong> <strong>Computer: ${computerChoice}</strong>`
  document.querySelector('.result').textContent = result
}
