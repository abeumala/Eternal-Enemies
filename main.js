'use strict'

function main () {

	const mainElement = document.querySelector('main');

	function buildDom (html) {
		mainElement.innerHTML = html
		return mainElement;
	}

	function buildSplashScreen () {
		const splashScreen = buildDom(`
		<section>
			<h1>Eternal Enemies</h1>
			<button class="start-button">START</button>
		</section>
		`);

		const startButton = document.querySelector('.start-button');

		startButton.addEventListener('click', buildGameScreen);

	}


	function buildGameScreen () {
		const gameScreen = buildDom(`
		<section class="game-container">
			<canvas></canvas>
		</section>
		`);

		const gameContainerElement = document.querySelector('.game-container');

		const width = gameContainerElement.offsetWidth;
		const height = gameContainerElement.offsetHeight;

		const canvasElement = document.querySelector('canvas');

		canvasElement.setAttribute('width', width);
		canvasElement.setAttribute('height', height);


		

		const game = new Game(canvasElement);
		game.startLoop();
		game.setGameOverCallback(buildGameOverScreen);

		document.addEventListener('keydown', function(event) {

			if (event.keyCode === 38) {
				game.player.setDirection(-1);
			}	else if (event.keyCode === 40) {
				game.player.setDirection(1);
			}
		});

		document.addEventListener('keyup', function(event) { // so it stop when i stop pressing
			if (event.keyCode === 38 || event.keyCode === 40) {
				game.player.setDirection(0);
			}
		})
	}

	function buildGameOverScreen () {
		const gameOverScreen = buildDom(`
			<section>
				<h1>GAME OVER</h1>
				<button class="restart-button">Restart</button>
			</section
		`);

		const restartButton = document.querySelector('.restart-button');
		restartButton.addEventListener('click', buildGameScreen);

	}

	buildSplashScreen();

}

window.addEventListener('load', main); //window its more generic than document



