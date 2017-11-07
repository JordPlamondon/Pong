import {SVG_NS} from '../settings'

export default class Paddle {
  
  constructor(boardHeight, width, height, x, y, upKey, downKey) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height =height;
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.speed = 8;
    this.score = 0;
    this.upInput = false;
    this.downInput = false;

    document.addEventListener('keydown', event => {
      switch (event.key) {
        case upKey:
          this.up();
          break;
        case downKey:
          this.down();
          break;
      }
    });

    document.addEventListener('keyup', event => {
      switch (event.key) {
        case upKey:
          this.upInput = false;
          break;
        case downKey:
          this.downInput = false;
          break;
      }
    });
  }

      coordinates(x, y, width, height) {
        let leftX = x;
        let rightX = x + width;
        let topY = y;
        let bottomY = y + height;
        return {leftX, rightX, topY, bottomY};
      }

      up () {
        this.upInput = true;
      }
    
      down () {
        this.downInput = true;
    }

  render(svg) {
    
    if (this.upInput) {this.y = Math.max(0, this.y-this.speed)}
    if (this.downInput) {this.y = Math.min(this.boardHeight-this.height, this.y+this.speed)}

    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', 'rgba(17, 26, 37, 0.795)');
    rect.setAttributeNS(null, 'stroke', 'black')
    rect.setAttributeNS(null, 'stroke-width', '1')

    svg.appendChild(rect);
  }
}