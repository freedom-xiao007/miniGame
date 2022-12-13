var screen = document.getElementById("game");
console.log(screen);
var brush = screen.getContext("2d");

// setInterval("gameCycle()", 1000);

var blocks = showAllBlock();

document.onkeydown = function(e) {
    brush.clearRect(0, 0, 150, 400);
    console.log(e);
    if (e.code == "Space") {
        console.log("spin block");
        rotateBlocks(blocks);
    }
    else if(e.code == "ArrowDown") {
        console.log("down");
        for (var block of blocks) {
            block.down();
        }
    }
    else if (e.code == "ArrowLeft") {
        console.log("left");
        for (var block of blocks) {
            block.left();
        }
    }
    else if (e.code == "ArrowRight") {
        console.log("up");
        for (var block of blocks) {
            block.right();
        }
    }
    for (var block of blocks) {
        block.show();
    }
}


function showAllBlock() {
    let blocks = [
        new Block_Left_L(brush, 30, 10),
        new Block_Right_L(brush, 70, 20),
        new Block_O(brush, 110, 10),
        new Block_Left_S(brush, 10, 70),
        new Block_Right_S(brush, 50, 60),
        new Block_T(brush, 90, 70),
        new Block_I(brush, 10, 110)
    ]

    return blocks;
}

function rotateBlocks(blocks) {
    console.log("rotate blocks");
    for (var block of blocks) {
        block.rotate();
    }
}

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

function moveBlock() {

}
