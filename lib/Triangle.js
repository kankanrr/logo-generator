const Shape = require("./Shape.js");

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    console.log("Triangle");
    return `<svg height="300" width="200">
    <polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}" />
    <text x="22" y="80" font-size="2.5em" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

module.exports = Triangle;
