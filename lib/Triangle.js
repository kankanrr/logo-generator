const Shape = require("./Shape.js");

class Triangle extends Shape {
  constructor(color) {
    ///this.stuff
    super(color);
  }

  render(data) {
    console.log("Triangle");
    return `<svg height="300" width="200">
    <polygon points="50 15, 100 100, 0 100" fill="${data.shapeColor}" />
    <text x="22" y="80" font-size="2.5em" fill="${data.textColor}">${data.text}</text>
  </svg>`;
  }
}

module.exports = Triangle;
