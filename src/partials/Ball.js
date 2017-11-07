import {SVG_NS} from '../settings'

export default class Ball {
  
  constructor(radius, boardWidth, boardHeight, plus, minus) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.ping = new Audio ('public/sounds/Princeton 2x12-dynamic.wav');
    this.plus = plus;
    this.minus = minus;

    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
          case plus:
              this.ballSpeed++;
              break;
          case minus:
              this.ballSpeed--;
              break;
      }
  });

  this.reset();
  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    this.vy = 0;

  while ( this.vy === 0 ) {
    this.vy = Math.floor(Math.random() * 8 - 5);
    }

    this.vx = this.direction * (8 - Math.abs(this.vy));
    }

  wallCollision(paddleOne, paddleTwo) {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;
      
    if (hitLeft) {
      this.direction = -1;
      this.goal(paddleTwo);
    }
    else if (hitRight) {
      this.direction = 1;
      this.goal(paddleOne);
    }
    else if (hitTop || hitBottom) {
      this.vy = -this.vy;
    }
  }

  paddleCollision(paddleOne, paddleTwo) {
    if (this.vx > 0) {
      let paddle = paddleTwo.coordinates(paddleTwo.x, paddleTwo.y, paddleTwo.width, paddleTwo.height);
      let {leftX, topY, bottomY} = paddle;

      if (
        this.x + this.radius >= leftX 
        && this.y >= topY 
        && this.y <= bottomY
      ) {
        this.vx = -this.vx;
        this.ping.play();
      }
    }
    else {
      let paddle = paddleOne.coordinates(paddleOne.x, paddleOne.y, paddleOne.width, paddleOne.height);
      let {rightX, topY, bottomY} = paddle;

    if (
      this.x - this.radius <= rightX 
      && this.y >= topY 
      && this.y <= bottomY
    ) {
      this.vx = -this.vx;
      this.ping.play();
      }
    }
  }

  goal (paddle) {
    paddle.score++;
    this.reset();
  }

  render(svg, paddleOne, paddleTwo) {
    
    this.y += this.vy;
    this.x += this.vx;

    this.wallCollision(paddleOne, paddleTwo);
    this.paddleCollision(paddleOne, paddleTwo);
  
    let circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'cx', this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null, 'fill', 'rgb(85, 145, 98)');
    circle.setAttributeNS(null, 'stroke', 'black');
    circle.setAttributeNS(null, 'stroke-width', '1');

    svg.appendChild(circle);
  }
}