// Get the board element
var board = document.getElementById("board");

// Define the board size
var boardSize = 3;

// Function to create the board
  // Animate the squares
  animateSquares();
}

// Function to animate the squares
function animateSquares() {
  var squares = document.getElementsByClassName("square");
  var delay = 100;

  // Loop through the squares and animate them
  for (var i = 0; i < squares.length; i++) {
    (function (index) {
      setTimeout(function () {
        squares[index].style.opacity = 1;
      }, delay * index);
    })(i);
  }
}


function boardAnimation() {
    let lines = document.getElementsByClassName("square1");
    let delay = 100;
}