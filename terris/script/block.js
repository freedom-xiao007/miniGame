function add(num1, num2) {
    return num1 + num2;
}

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

class Block {
    constructor(brush, x, y) {
        this.brush = brush;
        this.x = x;
        this.y = y;
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
        console.log("father");
    }
}

class Block_I extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.show();
    }

    show() {
        console.log("sun I");
        let x1 = this.x;
        let x2 = x1;
        let x3 = x1;
        let x4 = x1;
        let y1 = this.y;
        let y2 = y1 + BLOCK_HEIGHT;
        let y3 = y2 + BLOCK_HEIGHT;
        let y4 = y3 + BLOCK_HEIGHT;
        let centerX = this.x + BLOCK_WIDTH / 2;
        let centerY = y3;
        this.drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "cyan");
    }
}

class Block_Left_L extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.show();
    }

    show() {
        console.log("sun left L");
        let x1 = this.x;
        let x2 = x1;
        let x3 = x2 + BLOCK_WIDTH;
        let x4 = x3 + BLOCK_WIDTH;
        let y1 = this.y;
        let y2 = y1 + BLOCK_HEIGHT;
        let y3 = y2;
        let y4 = y2;
        this.drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "blue");
    }
}

class Block_Right_L extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.show();
    }

    show() {
        console.log("sun right L");
        let x1 = this.x;
        let x2 = x1 + BLOCK_HEIGHT;
        let x3 = x2 + BLOCK_WIDTH;
        let x4 = x3;
        let y1 = this.y;
        let y2 = y1;
        let y3 = y2;
        let y4 = y3 - BLOCK_HEIGHT;
        this.drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "orange");
    }
}

class Block_O extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.show();
    }

    show() {
        console.log("sun O");
        let x1 = this.x;
        let x2 = x1;
        let x3 = x1 + BLOCK_WIDTH;
        let x4 = x3;
        let y1 = this.y;
        let y2 = y1 + BLOCK_HEIGHT;
        let y3 = y1;
        let y4 = y3 + BLOCK_HEIGHT;
        this.drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "yellow");
    }
}

class Block_Left_S extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.show();
    }

    show() {
        let x1 = this.x;
        let x2 = x1 + BLOCK_WIDTH;
        let x3 = x2;
        let x4 = x3 + BLOCK_WIDTH;
        let y1 = this.y;
        let y2 = y1;
        let y3 = y2 - BLOCK_HEIGHT;
        let y4 = y3;
        this.drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "green");
    }
}

class Block_Right_S extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.show();
    }

    show() {
        let x1 = this.x;
        let x2 = x1 + BLOCK_WIDTH;
        let x3 = x2;
        let x4 = x3 + BLOCK_WIDTH;
        let y1 = this.y;
        let y2 = y1;
        let y3 = y2 + BLOCK_HEIGHT;
        let y4 = y3;
        this.drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "purple");
    }
}

class Block_T extends Block {
    constructor(brush, x, y) {
        super(brush, x, y);
        this.show();
    }

    show() {
        let x1 = this.x;
        let x2 = x1 + BLOCK_WIDTH;
        let x3 = x2;
        let x4 = x3 + BLOCK_WIDTH;
        let y1 = this.y;
        let y2 = y1;
        let y3 = y2 - BLOCK_HEIGHT;
        let y4 = y1;
        this.drawSolid(x1, y1, x2, y2, x3, y3, x4, y4, "red");
    }
}