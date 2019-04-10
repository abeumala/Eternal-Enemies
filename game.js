'use strict'

function Game(canvas) {
	this.player = null;
	this.enemies = []; // will be pushing objects so it's a string
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
};


Game.prototype.startLoop = function () {

	const loop = () => { //check context and why do i have to use arrowfunction
		
		this.clearCanvas();
		this.updateCanvas();
		this.drawCanvas();




		window.requestAnimationFrame(loop);

	}




	window.requestAnimationFrame(loop);
}


Game.prototype.clearCanvas = function () {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.updateCanvas = function () {

}

Game.prototype.drawCanvas = function () {

}