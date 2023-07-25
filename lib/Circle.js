const Shape = require("./Shape.js");

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    console.log("Circle");
    return `<svg height="300" width="200">
    <circle cx="100" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="55" y="115" font-size="4em" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}
