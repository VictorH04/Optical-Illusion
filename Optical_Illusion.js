let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

context.lineWidth = 5;
context.strokeStyle = 'gray';
context.beginPath();
for (let x = 0; x < 28; x++) {
    context.moveTo(x * 40 - 304, 0);
    context.lineTo(x * 40 + 20, 340);
    context.moveTo(x * 40, 0);
    context.lineTo(x * 40 - 324, 340);
}
context.stroke();

context.fillStyle = 'white';
for (let x = 0; x < 20; x++)
    for (let y = 0; y < 9; y++) {
        context.beginPath();
        context.arc(8 + x * 40, y * 42 - 9, 3, 0, 2 * Math.PI);
        context.arc(28 + x * 40, y * 42 - 29, 3, 0, 2 * Math.PI);
        context.fill();
    }