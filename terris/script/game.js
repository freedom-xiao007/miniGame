var screen = document.getElementById('game');
console.log(screen);
var brush = screen.getContext('2d');
brush.clearRect(0, 0, 300, 400);

// I
brush.fillStyle = 'cyan';
brush.fillRect(10, 10, 10, 10);
brush.fillRect(10, 20, 10, 10);
brush.fillRect(10, 30, 10, 10);
brush.fillRect(10, 40, 10, 10);
brush.fillStyle = 'black';
brush.strokeRect(10, 10, 10, 10);
brush.strokeRect(10, 20, 10, 10);
brush.strokeRect(10, 30, 10, 10);
brush.strokeRect(10, 40, 10, 10);

// 左L
brush.fillStyle = 'blue';
brush.fillRect(30, 10, 10, 10);
brush.fillRect(30, 20, 10, 10);
brush.fillRect(40, 20, 10, 10);
brush.fillRect(50, 20, 10, 10);
brush.fillStyle = 'black';
brush.strokeRect(30, 10, 10, 10);
brush.strokeRect(30, 20, 10, 10);
brush.strokeRect(40, 20, 10, 10);
brush.strokeRect(50, 20, 10, 10);

// 右L
brush.fillStyle = 'orange';
brush.fillRect(70, 20, 10, 10);
brush.fillRect(80, 20, 10, 10);
brush.fillRect(90, 20, 10, 10);
brush.fillRect(90, 10, 10, 10);
brush.fillStyle = 'black';
brush.strokeRect(70, 20, 10, 10);
brush.strokeRect(80, 20, 10, 10);
brush.strokeRect(90, 20, 10, 10);
brush.strokeRect(90, 10, 10, 10);

// o
brush.fillStyle = 'yellow';
brush.fillRect(110, 10, 10, 10);
brush.fillRect(110, 20, 10, 10);
brush.fillRect(120, 10, 10, 10);
brush.fillRect(120, 20, 10, 10);
brush.fillStyle = 'black';
brush.strokeRect(110, 10, 10, 10);
brush.strokeRect(110, 20, 10, 10);
brush.strokeRect(120, 10, 10, 10);
brush.strokeRect(120, 20, 10, 10);

// 左S
brush.fillStyle = 'green';
brush.fillRect(10, 70, 10, 10);
brush.fillRect(20, 70, 10, 10);
brush.fillRect(20, 60, 10, 10);
brush.fillRect(30, 60, 10, 10);
brush.fillStyle = 'black';
brush.strokeRect(10, 70, 10, 10);
brush.strokeRect(20, 70, 10, 10);
brush.strokeRect(20, 60, 10, 10);
brush.strokeRect(30, 60, 10, 10);

// 右S
brush.fillStyle = 'green';
brush.fillRect(50, 60, 10, 10);
brush.fillRect(60, 60, 10, 10);
brush.fillRect(60, 70, 10, 10);
brush.fillRect(70, 70, 10, 10);
brush.fillStyle = 'black';
brush.strokeRect(50, 60, 10, 10);
brush.strokeRect(60, 60, 10, 10);
brush.strokeRect(60, 70, 10, 10);
brush.strokeRect(70, 70, 10, 10);

// T
brush.fillStyle = 'red';
brush.fillRect(90, 70, 10, 10);
brush.fillRect(100, 70, 10, 10);
brush.fillRect(100, 60, 10, 10);
brush.fillRect(110, 70, 10, 10);
brush.fillStyle = 'black';
brush.strokeRect(90, 70, 10, 10);
brush.strokeRect(100, 70, 10, 10);
brush.strokeRect(100, 60, 10, 10);
brush.strokeRect(110, 70, 10, 10);