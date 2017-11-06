import {SVG_NS} from '../settings'

export default class Paddle {
  
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height =height;
    this.x = x;
    this.y = y;

    this.speed = 30;
    this.score = 0;

    document.addEventListener('keydown', event => {
      switch(event.key) {
        case up: 
          this.up();
          break;
        case down:
          this.down();
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

      up() {
        this.y = Math.max(this.y - this.speed, 0);
      }
      
      down() {
        this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
      }

  render(svg) {
    
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