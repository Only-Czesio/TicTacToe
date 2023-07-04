


const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-square]');
const board = document.getElementById('board');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
let whoseTurn;
let howManyDraws = 0;
let scoreX = 0;
let scoreO = 0;

startGame();

restartButton.addEventListener('click', startGame)

function startGame() {


    whoseTurn = false;
    cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
});
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}


function handleClick(e) {
    const cell = e.target;
    const currentClass = whoseTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass)
    if (checkforWinner(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        howManyDraws++;
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }


}
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}
function swapTurns() {
    whoseTurn = !whoseTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS)
    if (whoseTurn) {
        board.classList.add(CIRCLE_CLASS)
    }
    else {
        board.classList.add(X_CLASS)
    }
}
function checkforWinner(currentClass) {
    return WINNING_COMBINATIONS.some(combinations => {
        return combinations.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = `Draw! : ${howManyDraws}`;
    }
    else {
        if (whoseTurn) {
            scoreO++
            winningMessageTextElement.innerText = `"O's won : " ${scoreO}`
        }
        else {
            scoreX++
            winningMessageTextElement.innerText = `"X's won : " ${scoreX}`
        } 
    }
    winningMessageElement.classList.add('show');
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
};