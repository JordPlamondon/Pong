import './styles/game.css';
import Game from './partials/Game';

const game = new Game('game', 512, 256);

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();

const music = new Audio ('public/sounds/PongBGMusic.mp3');
music.play();
