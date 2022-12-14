let screen = document.getElementById("game");
console.log(screen);
let brush = screen.getContext("2d");

let currentBlock = null;
let gameMap = new GameMap(WINDOW_WIDTH, WINDOW_HEIGHT, BLOCK_SIZE, brush);
setInterval("gameCycle()", 50);

document.onkeydown = function(e) {
    console.log(e);
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
    currentBlock.show();
}

function gameCycle() {
  brush.clearRect(0, 0, 150, 400);
  if (currentBlock == null) {
      createBlock();
  } else {
      if (!currentBlock.autoDown()) {
          gameMap.addBlock(currentBlock);
          currentBlock = null;
      } else {
          currentBlock.show();
      }
  }
  gameMap.show();
}

function createBlock() {
  let randomType = Math.round(Math.random() * 6 + 1);
  console.log(randomType);
  switch (randomType) {
    case BLOCK_TYPE.I:
      currentBlock = new Block_I(brush, 10, 70);
      break;
    case BLOCK_TYPE.LEFT_L:
        currentBlock = new Block_Left_L(brush, 10, 70);
      break;
    case BLOCK_TYPE.RIGHT_L:
        currentBlock = new Block_Right_L(brush, 10, 70);
      break;
    case BLOCK_TYPE.O:
        currentBlock = new Block_O(brush, 10, 70);
      break;
    case BLOCK_TYPE.LEFT_S:
        currentBlock = new Block_Left_S(brush, 10, 70);
      break;
    case BLOCK_TYPE.RIGHT_S:
        currentBlock = new Block_Right_S(brush, 10, 70);
      break;
    case BLOCK_TYPE.T:
        currentBlock = new Block_T(brush, 10, 70);
      break;
  }
}
