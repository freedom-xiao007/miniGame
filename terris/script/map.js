class GameMap {
    constructor(width, height, blockSize, brush) {
        this.width = width / blockSize;
        this.height = height / blockSize;
        this.blockSize = blockSize;
        this.brush = brush;

        this.map = [];
        for (let i=0; i < this.height; i++) {
            this.map.push([]);
            for (let j=0; j < this.width; j++) {
                this.map[i].push("");
            }
        }
    }

    addBlock(block) {
        let currentState = block.states[block.stateIndex];
        for (let i=0; i < currentState.length; i++) {
            for (let j=0; j < currentState[i].length; j++) {
                if (currentState[i][j] === 1) {
                    let currentX = block.x + j * BLOCK_WIDTH;
                    let currentY = block.y + i * BLOCK_HEIGHT;
                    let row = currentY / this.blockSize;
                    let col = currentX / this.blockSize;
                    this.map[row][col] = block.color;
                }
            }
        }

        let clearInfo = this.removeRow();
        if (clearInfo[0] > 0) {
            this.remainDown(clearInfo[0], clearInfo[1]);
        }
    }

    removeRow() {
        let clearNum = 0
        let clearAmount = 0
        for (let i=this.height-1; i >= 0; i--) {
            if (this.isFull(this.map[i])) {
                if (clearNum === 0) {
                    clearNum = i;
                }
                clearAmount += 1;
            }
        }
        return [clearNum, clearAmount]
    }

    isFull(rowData) {
        for (let i=0; i < this.width; i++) {
            if (rowData[i] === "") {
                return false;
            }
        }
        return true;
    }

    remainDown(clearNum, clearAmount) {
        for (let i=clearNum; i >= clearAmount; i--) {
            for (let j=0; j < this.width; j++) {
                this.map[i][j] = this.map[i - clearAmount][j];
            }
        }
    }

    collision(x, y) {
        let row = y / this.blockSize;
        let col = x / this.blockSize;
        return this.map[row][col] !== "";
    }

    show() {
        for (let i=0; i < this.height; i++) {
            for (let j=0; j < this.width; j++) {
                if (this.map[i][j] !== "") {
                    this.brush.fillStyle = this.map[i][j];
                    this.brush.fillRect(j * this.blockSize, i * this.blockSize, BLOCK_WIDTH, BLOCK_HEIGHT);
                    this.brush.fillStyle = "black";
                    this.brush.strokeRect(j * this.blockSize, i * this.blockSize, BLOCK_WIDTH, BLOCK_HEIGHT);
                }
            }
        }
    }
}
