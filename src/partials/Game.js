import {SVG_NS, KEYS} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Ball2 from './Ball2.js';
import Score from './Score';
import Winner from './Winner';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
	
		this.gameElement = document.getElementById(this.element);
		
		this.board = new Board(this.width, this.height);
		this.boardGap = 10;
		this.paddleWidth = 8;
		this.paddleHeight = 56;

		this.ball = new Ball (
			8,
			this.width, 
			this.height,
			KEYS.plus, 
			KEYS.minus
		);
		this.ball2 = new Ball2 (
			16, 
			this.width, 
			this.height
		);
		
		this.score1 = new Score (140, 35, 30);
		this.score2 = new Score (350, 35, 30);

		this.winner = new Winner(
			this.x,
			this.y,
			this.size,
			this.banner
		);

		this.winner1 = new Winner(56, 150, 50, 'Player 1 Wins!');
		this.winner2 = new Winner(56, 150, 50, 'Player 2 Wins!');

		this.paddleOne = new Paddle(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			this.boardGap, 
			(this.height-this.paddleHeight)/2,
			KEYS.a,
			KEYS.z
		);
		
		this.paddleTwo = new Paddle(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			(this.width-this.boardGap-this.paddleWidth), 
			(this.height-this.paddleHeight)/2,
			KEYS.up,
			KEYS.down
		);

		document.addEventListener('keydown', event => {
			if ( event.key === KEYS.spaceBar ) {
				this.pause = !this.pause
			}
		});
	}

	render() {

		if (this.pause) {
			return;
		}

		this.gameElement.innerHTML = '';
		
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width',  this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewbox', `0 0  ${this.width} ${this.height}`);
		svg.setAttributeNS(null, 'version', '1.1');

		this.gameElement.appendChild(svg);

		const paddleOneWin = this.paddleOne.score >= 11;
		const paddleTwoWin = this.paddleTwo.score >= 11;

		if (paddleOneWin) {
			return this.winner1.render(svg, this.winner1.banner);
		}
		else if (paddleTwoWin) {
			return this.winner2.render(svg, this.winner2.banner);
}

		this.board.render(svg);
		this.ball.render(svg, this.paddleOne, this.paddleTwo);
		this.ball2.render(svg, this.paddleOne, this.paddleTwo);
		this.paddleOne.render(svg);
		this.paddleTwo.render(svg);
		this.score1.render(svg, this.paddleOne.score);
		this.score2.render(svg, this.paddleTwo.score);
	}
}
