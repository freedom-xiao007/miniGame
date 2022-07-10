var screen = document.getElementById("game");
console.log(screen);
var brush = screen.getContext("2d");

// setInterval("gameCycle()", 1000);

const BLOCK_TYPE = {
  I: 1,
  LEFT_L: 2,
  RIGHT_L: 3,
  O: 4,
  LEFT_S: 5,
  RIGHT_S: 6,
  T: 7,
};
const BLOCK_WIDTH = 10;
const BLOCK_HEIGHT = 10;

function gameCycle() {
  brush.clearRect(0, 0, 150, 400);
  createBlock();
  moveBlock();
}

function createBlock() {
  var randomType = Math.round(Math.random() * 6 + 1);
  console.log(randomType);
  switch (randomType) {
    case BLOCK_TYPE.I:
      createI(10, 70);
      break;
    case BLOCK_TYPE.LEFT_L:
      crateLeftL(10, 70);
      break;
    case BLOCK_TYPE.RIGHT_L:
      createRightL(10, 70);
      break;
    case BLOCK_TYPE.O:
      createO(10, 70);
      break;
    case BLOCK_TYPE.LEFT_S:
      createLeftS(10, 70);
      break;
    case BLOCK_TYPE.RIGHT_S:
      createRightS(10, 70);
      break;
    case BLOCK_TYPE.T:
      createT(10, 70);
      break;
  }
}

function moveBlock() {}

class Block {
  constructor(x1, y1, x2, y2, x3, y3, x4, y4, color, centerX, centerY) {
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.x4 = x4;
    this.y1 = y1;
    this.y2 = y2;
    this.y3 = y3;
    this.y4 = y4;
    this.color = color;
    this.centerX = centerX;
    this.centerY = centerY;
  }

  spin() {
	// 20,10, 20,20, 20,30, 20,40
	// 0,10, 0,20, 0,30, 0,40
	// 20 - 2(20-20)
	this.x1 = this.spin90x(this.x1, this.y1);
	this.y1 = this.spin90y(this.x1, this.y1);
	this.x2 = this.spin90x(this.x2, this.y2);
	this.y2 = this.spin90y(this.x2, this.y2);
	this.x3 = this.spin90x(this.x3, this.y3);
	this.y3 = this.spin90y(this.x3, this.y3);
	this.x4 = this.spin90x(this.x4, this.y4);
	this.y4 = this.spin90y(this.x4, this.y4);
  }

  spin90x(x, y) {
	return this.centerX - (x - this.centerX);
  }
  spin90y(x, y) {
	return this.centerY + (y - this.centerY);
  }
}

currentBlock = createI(70, 10);
console.log("origin block", currentBlock);
document.onkeydown = function(e) {
	console.log(e);
	if (e.code = "Space") {
		currentBlock.spin();
		drawBlock(currentBlock);
		console.log("spin block", currentBlock);
	}
}

// crateLeftL(30, 10);
// createRightL(70, 20);
// createO(110, 10);
// createLeftS(10, 70);
// createRightS(50, 60);
// createT(90, 70);

function drawBlock(block) {
  drawSolid(
    block.x1,
    block.y1,
    block.x2,
    block.y2,
    block.x3,
    block.y3,
    block.x4,
    block.y4,
    block.color
  );
}

function drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, color) {
  brush.fillStyle = color;
  brush.fillRect(x1, y1, BLOCK_WIDTH, BLOCK_HEIGHT);
  brush.fillRect(x2, y2, BLOCK_WIDTH, BLOCK_HEIGHT);
  brush.fillRect(x3, y3, BLOCK_WIDTH, BLOCK_HEIGHT);
  brush.fillRect(x4, y4, BLOCK_WIDTH, BLOCK_HEIGHT);
  drawOutline(x1, y1, x2, y2, x3, y3, x4, y4);
}

function drawOutline(x1, y1, x2, y2, x3, y3, x4, y4) {
  brush.fillStyle = "black";
  brush.strokeRect(x1, y1, BLOCK_WIDTH, BLOCK_HEIGHT);
  brush.strokeRect(x2, y2, BLOCK_WIDTH, BLOCK_HEIGHT);
  brush.strokeRect(x3, y3, BLOCK_WIDTH, BLOCK_HEIGHT);
  brush.strokeRect(x4, y4, BLOCK_WIDTH, BLOCK_HEIGHT);
}

// I
function createI(startX, startY) {
  x1 = startX;
  x2 = x1;
  x3 = x1;
  x4 = x1;
  y1 = startY;
  y2 = y1 + BLOCK_HEIGHT;
  y3 = y2 + BLOCK_HEIGHT;
  y4 = y3 + BLOCK_HEIGHT;
  centerX = startX + BLOCK_WIDTH / 2;
  centerY = y3;
  drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "cyan");
  return new Block(x1, y1, x2, y2, x3, y3, x4, y4, "cyan", centerX, centerY);
}

// 左L
function crateLeftL(startX, startY) {
  x1 = startX;
  x2 = x1;
  x3 = x2 + BLOCK_WIDTH;
  x4 = x3 + BLOCK_WIDTH;
  y1 = startY;
  y2 = y1 + BLOCK_HEIGHT;
  y3 = y2;
  y4 = y2;
  drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "blue");
}

// 右L
function createRightL(startX, startY) {
  x1 = startX;
  x2 = x1 + BLOCK_HEIGHT;
  x3 = x2 + BLOCK_WIDTH;
  x4 = x3;
  y1 = startY;
  y2 = y1;
  y3 = y2;
  y4 = y3 - BLOCK_HEIGHT;
  drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "orange");
}

// o
function createO(startX, startY) {
  x1 = startX;
  (x2 = x1), (x3 = x1 + BLOCK_WIDTH);
  x4 = x3;
  y1 = startY;
  y2 = y1 + BLOCK_HEIGHT;
  y3 = y1;
  y4 = y3 + BLOCK_HEIGHT;
  drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "yellow");
}

// 左S
function createLeftS(startX, startY) {
  x1 = startX;
  (x2 = x1 + BLOCK_WIDTH), (x3 = x2);
  x4 = x3 + BLOCK_WIDTH;
  y1 = startY;
  y2 = y1;
  y3 = y2 - BLOCK_HEIGHT;
  y4 = y3;
  drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "green");
}

// 右S
function createRightS(startX, startY) {
  x1 = startX;
  (x2 = x1 + BLOCK_WIDTH), (x3 = x2);
  x4 = x3 + BLOCK_WIDTH;
  y1 = startY;
  y2 = y1;
  y3 = y2 + BLOCK_HEIGHT;
  y4 = y3;
  drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "purple");
}

// T
function createT(startX, startY) {
  x1 = startX;
  (x2 = x1 + BLOCK_WIDTH), (x3 = x2);
  x4 = x3 + BLOCK_WIDTH;
  y1 = startY;
  y2 = y1;
  y3 = y2 - BLOCK_HEIGHT;
  y4 = y1;
  drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "red");
}
