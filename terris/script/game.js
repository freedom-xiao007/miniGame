let screen = document.getElementById("game");
console.log(screen);
let brush = screen.getContext("2d");

let nextBlockShow = document.getElementById("next_block");
let nextBlockBrush = nextBlockShow.getContext("2d");

let scoreText = document.getElementById("score");

let score = 0;
let currentBlock = null;
let nextBlock = null;
const gameMap = new GameMap(WINDOW_WIDTH, WINDOW_HEIGHT, BLOCK_SIZE, brush);
setInterval("gameCycle()", 50);

document.onkeydown = function(e) {
    if (currentBlock == null) {
        return
    }
    if (e.code === "Space") {
        console.log("spin block");
        currentBlock.rotate();
    }
    else if(e.code === "ArrowDown") {
        console.log("down");
        currentBlock.down();
    }
    else if (e.code === "ArrowLeft") {
        console.log("left");
        currentBlock.left();
    }
    else if (e.code === "ArrowRight") {
        console.log("up");
        currentBlock.right();
    }
    currentBlock.show(currentBlock.x, currentBlock.y, currentBlock.brush);
}

function gameCycle() {
  brush.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
  if (currentBlock == null) {
      currentBlock = nextBlock;
      nextBlock = createBlock();
  } else {
      if (!currentBlock.autoDown()) {
          score += gameMap.addBlock(currentBlock);
          currentBlock = null;
      } else {
          currentBlock.show(currentBlock.x, currentBlock.y, currentBlock.brush);
      }
  }
  gameMap.show();
  showNextBlock();
  showScore();
}

function showScore() {
    console.log("score:", score);
    scoreText.textContent="score: " + score;
}

function showNextBlock() {
    nextBlockBrush.clearRect(0, 0, 40, 40);
    nextBlock.show(0, 0, nextBlockBrush);
}

function createBlock() {
  let randomType = Math.round(Math.random() * 6 + 1);
  let startX = 70;
  let startY = 0;
  let block = null;
  console.log(randomType);
  switch (randomType) {
    case BLOCK_TYPE.I:
      block = new Block_I(brush, startX, startY);
      break;
    case BLOCK_TYPE.LEFT_L:
        block = new Block_Left_L(brush, startX, startY);
      break;
    case BLOCK_TYPE.RIGHT_L:
        block = new Block_Right_L(brush, startX, startY);
      break;
    case BLOCK_TYPE.O:
        block = new Block_O(brush, startX, startY);
      break;
    case BLOCK_TYPE.LEFT_S:
        block = new Block_Left_S(brush, startX, startY);
      break;
    case BLOCK_TYPE.RIGHT_S:
        block = new Block_Right_S(brush, startX, startY);
      break;
    case BLOCK_TYPE.T:
        block = new Block_T(brush, startX, startY);
      break;
  }
  return block;
}
