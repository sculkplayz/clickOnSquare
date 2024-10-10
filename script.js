let score = 0;

const gameArea = document.getElementById('game');
const scoreDisplay = document.getElementById('score');

function randomPosition() {
    const x = Math.random() * (gameArea.clientWidth - 50);
    const y = Math.random() * (gameArea.clientHeight - 50);
    return { x, y };
}

function createSquare() {
    const square = document.createElement('div');
    square.className = 'square';
    const { x, y } = randomPosition();
    square.style.left = `${x}px`;
    square.style.top = `${y}px`;

    square.addEventListener('click', () => {
        score++;
        scoreDisplay.innerText = `Счет: ${score}`;
        gameArea.removeChild(square);
        createSquare(); // создаем новый квадрат
    });

    gameArea.appendChild(square);
}

createSquare(); // создаем первый квадрат