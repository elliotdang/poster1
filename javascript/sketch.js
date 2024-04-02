let squareSize = 100; // Size of each square
let spacing = 0; // Spacing between squares
let squares = []; // Array to store squares

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateSquares();
}

function draw() {
  background(220);
  for (let square of squares) {
    square.show();
  }
}

function generateSquares() {
  let cols = floor(width / (squareSize + spacing)); // Number of columns
  let rows = floor(height / (squareSize + spacing)); // Number of rows

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * (squareSize + spacing) + spacing / 2;
      let y = i * (squareSize + spacing) + spacing / 2;
      squares.push(new Square(x, y));
    }
  }
}

function mousePressed() {
  for (let i = squares.length - 1; i >= 0; i--) {
    if (squares[i].contains(mouseX, mouseY)) {
      // Remove the clicked square from the array
      squares.splice(i, 1);
      // Exit the loop after removing the square
      break;
    }
  }
}

class Square {
  constructor(x, y, r = random(255), g = random(255), b = random(255)) {
    this.x = x;
    this.y = y;
    this.size = squareSize;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  show() {
    fill(this.r, this.g, this.b);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }

  contains(x, y) {
    return (x >= this.x && x <= this.x + this.size && y >= this.y && y <= this.y + this.size);
  }
}
