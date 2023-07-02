


const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");
const square5 = document.getElementById("square5");
const square6 = document.getElementById("square6");
const square7 = document.getElementById("square7");
const square8 = document.getElementById("square8");
const square9 = document.getElementById("square9");


let boardTable = [square1, square2, square3, square4, square5, square6, square7, square8, square9];


function computerMove() {
    
}

function start() {
    
let counterMove = 0;



    


let check1 = false;
let check2 = false;
let check3 = false;
let check4 = false;
let check5 = false;
let check6 = false;
let check7 = false;
let check8 = false;
let check9 = false;

square1.addEventListener("click", function () {
    if (!check1) {
    check1++
    counterMove++
        if (check1 == 1 && counterMove % 2) {
            square1.innerHTML += 'X';
    }
        if(check1 == 1 && counterMove % 2 == 0)
            square1.innerHTML += 'O';
    }
});
square2.addEventListener("click", function () {
    if (!check2) {
        check2++
        counterMove++
        if (check2 == 1 && counterMove % 2) {
            square2.innerHTML += 'X';
        }
        if (check2 == 1 && counterMove % 2 == 0)
            square2.innerHTML += 'O';
    }
});
square3.addEventListener("click", function () {
    if (!check3) {
        check3++
        counterMove++
        if (check3 == 1 && counterMove % 2) {
            square3.innerHTML += 'X';
        }
        if (check3 == 1 && counterMove % 2 == 0)
            square3.innerHTML += 'O';
    }
});
square4.addEventListener("click", function () {
    if (!check4) {
        check4++
        counterMove++
        if (check4 == 1 && counterMove % 2) {
            square4.innerHTML += 'X';
        }
        if (check4 == 1 && counterMove % 2 == 0)
            square4.innerHTML += 'O';
    }
});
square5.addEventListener("click", function () {
    if (!check5) {
        check5++
        counterMove++
        if (check5 == 1 && counterMove % 2) {
            square5.innerHTML += 'X';
        }
        if (check5 == 1 && counterMove % 2 == 0)
            square5.innerHTML += 'O';
    }
});
square6.addEventListener("click", function () {
    if (!check6) {
        check6++
        counterMove++
        if (check6 == 1 && counterMove % 2) {
            square6.innerHTML += 'X';
        }
        if (check6 == 1 && counterMove % 2 == 0)
            square6.innerHTML += 'O';
    }
});
square7.addEventListener("click", function () {
    if (!check7) {
        check7++
        counterMove++
        if (check7 == 1 && counterMove % 2) {
            square7.innerHTML += 'X';
        }
        if (check7 == 1 && counterMove % 2 == 0)
            square7.innerHTML += 'O';
    }
});
square8.addEventListener("click", function () {
    if (!check8) {
        check8++
        counterMove++
        if (check8 == 1 && counterMove % 2) {
            square8.innerHTML += 'X';
        }
        if (check8 == 1 && counterMove % 2 == 0)
            square8.innerHTML += 'O';
    }
});
square9.addEventListener("click", function () {
    if (!check9) {
        check9++
        counterMove++
        if (check9 == 1 && counterMove % 2) {
            square9.innerHTML += 'X';
        }
        if (check9 == 1 && counterMove % 2 == 0)
            square9.innerHTML += 'O';
    }
});

}

function checkforWinner() {

let b1 = document.getElementById("square1").textContent;
let b2 = document.getElementById("square2").textContent;
let b3 = document.getElementById("square3").textContent;
let b4 = document.getElementById("square4").textContent;
let b5 = document.getElementById("square5").textContent;
let b6 = document.getElementById("square6").textContent;
let b7 = document.getElementById("square7").textContent;
let b8 = document.getElementById("square8").textContent;
let b9 = document.getElementById("square9").textContent;


    if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
        countingScore();
        b1.style.color = "red";
        b2.style.color = "red"
        b3.style.color = "red"
        stopGame();
    }
    if(b1 == 'X' && b4 == 'X' && b7 == 'X') {
        countingScore();
        b1.style.color = "red";
        b2.style.color = "red"
        b3.style.color = "red"
        stopGame();    
    }
    if(b4 == 'X' && b5 == 'X' && b6 == 'X') {
        countingScore();
        b1.style.color = "red";
        b2.style.color = "red"
        b3.style.color = "red"
        stopGame();     
    }
    if(b7 == 'X' && b8 == 'X' && b9 == 'X') {
        countingScore();
        b1.style.color = "red";
        b2.style.color = "red"
        b3.style.color = "red"
        stopGame();
    }
    if(b1 == 'X' && b5 == 'X' && b9 == 'X') {
        countingScore();
        b1.style.color = "red";
        b2.style.color = "red"
        b3.style.color = "red"
        stopGame();
    }
    if(b3 == 'X' && b5 == 'X' && b7 == 'X') {
        countingScore();
        b1.style.color = "red";
        b2.style.color = "red"
        b3.style.color = "red"
        stopGame();     
    }
    if(b1 == 'O' && b2 == 'O' && b3 == 'O') {
        countingScore();
        b1.style.color = "red";
        b2.style.color = "red"
        b3.style.color = "red"
        stopGame();
    }
    if(b1 == 'O' && b4 == 'O' && b7 == 'O') {
        countingScore();
        b1.style.color = "red";
        b2.style.color = "red"
        b3.style.color = "red"
        stopGame();      
    }
    if(b4 == 'O' && b5 == 'O' && b6 == 'O') {
        countingScore();
        b1.style.color = "red";
        b2.style.color = "red"
        b3.style.color = "red"
        stopGame();    
    }
    if(b7 == 'O' && b8 == 'O' && b9 == 'O') {
        countingScore();
        b1.style.color = "red";
        b2.style.color = "red"
        b3.style.color = "red"
        stopGame();      
    }
    if(b1 == 'O' && b5 == 'O' && b9 == 'O') {
        countingScore();
        b1.style.color = "red";
        b2.style.color = "red"
        b3.style.color = "red"
        stopGame();      
    }
    if(b3 == 'O' && b5 == 'O' && b7 == 'O') {
        countingScore();
        b1.style.color = "red";
        b2.style.color = "red"
        b3.style.color = "red"
        stopGame(); 
    }

}

function resetGame() {
    location.reload();
}

function countingPlayerScore() {

    let player1 = 0;

    player1++;

    let score = document.getElementsByClassName("VSAI");

    score.innerHTML += `Player score : ${player}`;

}

function countingComputerScore() {

    let computer = 0;

    computer++;

    let score = document.getElementsByClassName("VSAI");

    score.innerHTML += `Player score : ${computer}`;

}

function stopGame() {

}

start();