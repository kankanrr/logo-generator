const Shape = require("./Shape.js");

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render(data) {
    console.log("Square");
    return `<svg height="300" width="200">
    <rect width="160" height="160" fill="${data.shapeColor}" />
    <text x="35" y="90" font-size="4em" fill="${data.textColor}">${data.text}</text>
  </svg>`;
  }
}

module.exports = Square;
