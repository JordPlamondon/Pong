import {SVG_NS} from '../settings'

export default class Board {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  render(svg) {
    
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'x', '0');
    rect.setAttributeNS(null, 'y', '0');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', 'rgba(0, 40, 140, 0.6)');
    rect.setAttributeNS(null, 'stroke', 'black')
    rect.setAttributeNS(null, 'stroke-width', '3')
    
    let line = document.createElementNS(SVG_NS,'line');
    line.setAttributeNS(null, 'x1', this.width/2);
    line.setAttributeNS(null, 'y1', 0);
    line.setAttributeNS(null, 'x2', this.width/2);
    line.setAttributeNS(null, 'y2', this.height);
    line.setAttributeNS(null, 'stroke', 'lightgrey');
    line.setAttributeNS(null, 'stroke-dasharray', '10, 9');
    line.setAttributeNS(null, 'stroke-width', '2');
    
    svg.appendChild(rect);
    svg.appendChild(line);
  }
}