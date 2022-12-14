
const BLOCK_TYPE = {
    I: 1,
    LEFT_L: 2,
    RIGHT_L: 3,
    O: 4,
    LEFT_S: 5,
    RIGHT_S: 6,
    T: 7,
};

class Block {
    constructor(brush, x, y) {
        this.brush = brush;
        this.x = x;
        this.y = y;
        this.stateIndex = 0;
        this.states = [];
        this.color = "";
        this.beforeTimeStamp = new Date().getTime();
    }

    drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, color) {
        console.log("draw block");
        this.brush.fillStyle = color;
        this.brush.fillRect(x1, y1, BLOCK_WIDTH, BLOCK_HEIGHT);
        this.brush.fillRect(x2, y2, BLOCK_WIDTH, BLOCK_HEIGHT);
        this.brush.fillRect(x3, y3, BLOCK_WIDTH, BLOCK_HEIGHT);
        this.brush.fillRect(x4, y4, BLOCK_WIDTH, BLOCK_HEIGHT);
        this.drawOutline(x1, y1, x2, y2, x3, y3, x4, y4);
    }

    drawOutline(x1, y1, x2, y2, x3, y3, x4, y4) {
        this.brush.fillStyle = "black";
        this.brush.strokeRect(x1, y1, BLOCK_WIDTH, BLOCK_HEIGHT);
        this.brush.strokeRect(x2, y2, BLOCK_WIDTH, BLOCK_HEIGHT);
        this.brush.strokeRect(x3, y3, BLOCK_WIDTH, BLOCK_HEIGHT);
        this.brush.strokeRect(x4, y4, BLOCK_WIDTH, BLOCK_HEIGHT);
    }

    show() {
        console.log("index:", this.stateIndex);
        if (this.stateIndex >= this.states.length) {
            this.stateIndex = 0;
        }

        let box = [];
        let currentState = this.states[this.stateIndex];
        for (let i=0; i < currentState.length; i++) {
            for (let j=0; j < currentState[i].length; j++) {
                if (currentState[i][j] === 1) {
                    box.push([this.x + j * BLOCK_WIDTH, this.y + i * BLOCK_HEIGHT]);
                }
            }
        }
        if (box.length < 4) {
            console.error("block data error!");
            return;
        }
        this.drawSolid(box[0][0], box[0][1], box[1][0], box[1][1], box[2][0], box[2][1], box[3][0], box[3][1], this.color);
    }

    rotate() {
        this.stateIndex += 1;
    }

    down() {
        if (!this.isOutBound(this.x, this.y + BLOCK_HEIGHT)) {
            this.y = this.y + BLOCK_HEIGHT;
            return true;
        }
        return false;
    }

    autoDown() {
        let currentTimeStamp = new Date().getTime();
        if (currentTimeStamp - this.beforeTimeStamp >= 1000){
            this.beforeTimeStamp = currentTimeStamp;
            return this.down();
        }
        return true;
    }

    left() {
        if (!this.isOutBound(this.x - BLOCK_WIDTH, this.y + BLOCK_HEIGHT)) {
            this.x = this.x - BLOCK_WIDTH;
        }
    }

    right() {
        if (!this.isOutBound(this.x + BLOCK_WIDTH, this.y + BLOCK_HEIGHT)) {
            this.x = this.x + BLOCK_WIDTH;
        }
    }

    isOutBound(x, y) {
        let currentState = this.states[this.stateIndex];
        for (let i=0; i < currentState.length; i++) {
            for (let j=0; j < currentState[i].length; j++) {
                if (currentState[i][j] === 1) {
                    if ((x + j * BLOCK_WIDTH) < 0) {
                        return true;
                    }
                    if ((x + j * BLOCK_WIDTH) + BLOCK_WIDTH > WINDOW_WIDTH) {
                        return true;
                    }
                    if ((y + i * BLOCK_HEIGHT) + BLOCK_HEIGHT > WINDOW_HEIGHT) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}

class Block_I extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.color = "cyan";
        this.states = [
            [
                [0, 1 , 0, 0],
                [0, 1 , 0, 0],
                [0, 1 , 0, 0],
                [0, 1 , 0, 0],
            ],
            [
                [0, 0 , 0, 0],
                [1, 1 , 1, 1],
                [0, 0 , 0, 0],
                [0, 0 , 0, 0],
            ],
        ];
        this.show();
    }
}

class Block_Left_L extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.color = "blue";
        this.states = [
            [
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 0],
            ],
            [
                [0, 1, 1],
                [0, 1, 0],
                [0, 1, 0],
            ],
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 1],
            ],
            [
                [0, 1, 0],
                [0, 1, 0],
                [1, 1, 0],
            ],
        ];
        this.show();
    }
}

class Block_Right_L extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.color = "orange";
        this.states = [
            [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 1],
            ],
            [
                [0, 0, 0],
                [1, 1, 1],
                [1, 0, 0],
            ],
            [
                [1, 1, 0],
                [0, 1, 0],
                [0, 1, 0],
            ],
            [
                [0, 0, 0],
                [0, 0, 1],
                [1, 1, 1],
            ],
        ];
        this.show();
    }
}

class Block_O extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.color = "yellow";
        this.states = [
            [
                [1, 1],
                [1, 1]
            ]
        ];
        this.show();
    }
}

class Block_Left_S extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.color = "green";
        this.states = [
            [
                [0, 1, 1],
                [1, 1, 0],
                [0, 0, 0],
            ],
            [
                [0, 1, 0],
                [0, 1, 1],
                [0, 0, 1],
            ]
        ];
        this.show();
    }
}

class Block_Right_S extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.color = "purple";
        this.states = [
            [
                [1, 1, 0],
                [0, 1, 1],
                [0, 0, 0],
            ],
            [
                [0, 0, 1],
                [0, 1, 1],
                [0, 1, 0],
            ]
        ];
        this.show();
    }
}

class Block_T extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.color = "red";
        this.states = [
            [
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0],
            ],
            [
                [0, 1, 0],
                [0, 1, 1],
                [0, 1, 0],
            ],
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0],
            ],
            [
                [0, 1, 0],
                [1, 1, 0],
                [0, 1, 0],
            ],
        ];
        this.show();
    }
}
