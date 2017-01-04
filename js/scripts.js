var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');
var newGameBtn = document.getElementById('js-newGameButton');
var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');
var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');
var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');
var gameState = 'notStarted'
var	player = {
		name: '',
		score: 0,
	},
	computer = {
		score: 0	
	};

pickRock.addEventListener('click', function() { playerPick('Rock') });
pickPaper.addEventListener('click', function() { playerPick('Paper') });
pickScissors.addEventListener('click', function() { playerPick('Scissors') });
newGameBtn.addEventListener('click', newGame);

function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
			break;
		case 'ended':
			newGameBtn.innerText = 'Play again';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';			
	}
}

setGameElements();

function newGame() {
	player.name = prompt('Enter your name', 'Your name');

	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();
		playerNameElem.innerHTML = player.name;
		setGamePoints();
	}
}


function getComputerPick() {
	var possiblePicks = ['Rock', 'Paper', 'Scissors'];
	return possiblePicks[Math.floor(Math.random() * 3)];
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
}

function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';

	var winnerIs = 'player';

	if (playerPick == computerPick) {
		winnerIs = 'noone'; 
		playerResultElem.innerHTML = 'Draw!';
		computerResultElem.innerHTML = 'Draw!';

	} else if (
		(computerPick == 'Rock' && playerPick == 'Scissors') ||
		(computerPick == 'Scissors' && playerPick == 'Paper') ||
		(computerPick == 'Paper' && playerPick == 'Rock')) {

		winnerIs = 'computer';
	}

	if (winnerIs == 'player') {
		playerResultElem.innerHTML = "You win!";
		player.score++;
	} else if (winnerIs == 'computer') {
		computerResultElem.innerHTML = "Computer Win!";
		computer.score++;
	}
	
	setGamePoints();
	
	if (player.score === 5 || computer.score === 5) {
		if (player.score > computer.score) {
			alert(player.name + ' won!');
		}
		else {
			alert('Computer won!');
		}
		
		gameState = 'ended';
		setGameElements();
		playerResultElem.innerHTML = computerResultElem.innerHTML = '';
		playerPickElem.innerHTML = computerPickElem.innerHTML = '';
	}
}

