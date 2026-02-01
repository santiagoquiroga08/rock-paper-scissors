# rock-paper-scissors
# Rock Paper Scissors (Console Game)

A simple Rock Paper Scissors game built in JavaScript and played entirely in the browser console.
This project was created as a learning exercise to practice functions, conditionals, scope, and basic program structure.

---

## How to Play

1. Clone or download this repository
2. Open the `index.html` file in your browser
3. Open the browser console

   * Right click → Inspect → Console
4. You will be prompted to enter one of the following:

   * `rock`
   * `paper`
   * `scissors`
5. The game will play 5 rounds against the computer
6. The final score and winner will be displayed in the console

---

## Built With

* JavaScript (Vanilla)
* HTML
* Browser Console

---

## Features

* Random computer choice generation
* Human input using `prompt`
* Case-insensitive input handling
* Score tracking for both player and computer
* Five-round game system
* Final winner announcement

---

## Code Structure

* `getHumanChoice()`
  Prompts the user for input and returns their selection in lowercase

* `getComputerChoice()`
  Generates a random choice for the computer (`rock`, `paper`, or `scissors`)

* `playRound()`
  Compares both choices, determines the round winner, and updates the score

* `playGame()`
  Runs five rounds, tracks the total score, and displays the final game result

---

## What I Learned

* How to use functions and parameters in JavaScript
* The difference between global and local scope
* How to structure a program into smaller, reusable functions
* How to track state using variables
* How to apply conditional logic to solve problems

---

## Future Improvements

* Add a graphical user interface (GUI)
* Replace `prompt` and console output with buttons and on-screen text
* Add input validation for invalid choices
* Use loops instead of manual round calls
* Add animations and visual feedback for each round

---

## Run Locally

1. Clone this repository
2. Open `index.html` in your browser
3. Open the developer console
4. Follow the prompts to play

---

## Author

Santiago
