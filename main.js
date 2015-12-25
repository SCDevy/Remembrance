var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var vpHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var canvas = document.getElementById("game-canvas");
canvas.width = vpWidth;
canvas.height = vpHeight;

var game = Game(canvas, "url('img/portraits/family.jpg')", ["url('img/portraits/william.jpg')", "url('img/portraits/jean.jpg')", "url('img/portraits/michael.jpg')", "url('img/portraits/stephen.jpg')"], [87, 74, 77, 83], 20, 10);
