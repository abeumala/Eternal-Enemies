'use strict'

function Player (canvas) {
	this.lives = 3;
	this.canvas = canvas;
	this.x = 50;
	this.y = (this.canvas.height/2);
	this.size = 50;
	this.ctx = this.canvas.getContext('2d');
	this.speed = 3;
	this.direction = 0;
}


Player.prototype.draw = function () {
	this.ctx.fillStyle = 'blue';
	this.ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
}

Player.prototype.update = function () {
	this.y = this.y + this.direction * this.speed;
}


Player.prototype.setDirection = function (newDirection) {
	this.direction = newDirection;
}


Player.prototype.setLives = function () {
	this.lives --;
}

Player.prototype.checkCollisionWithEnemy = function (enemy) {
	const collisionRigth = this.x + this.size/2 > enemy.x - enemy.size/2;
	const collisionLeft = this.x - this.size/2 < enemy.x + enemy.size/2;
	const collisionTop = this.y - this.size/2 < enemy.y + enemy.size/2;
	const collisionBottom = this.y + this.size/2 > enemy.y - enemy.size/2;

	return collisionRigth && collisionLeft && collisionTop && collisionBottom;
}



// player.x + player.size/2 > player.x - player.size/2 //RIGHT COLLISION//
// player.x - player.size/2 < enemy.x + enemy.size/2 //LEFT COLLISION//

// player.y - player.size/2 < player.y + enemy.size/2 // TOP COLLISION
//player.y + player.size/2 > player