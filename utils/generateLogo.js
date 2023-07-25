const Shape = require("../lib/Shape.js");
const Triangle = require("../lib/Triangle.js");
const Square = require("../lib/Square.js");
const Circle = require("../lib/Circle.js");

function generateLogo(data) {
  if (data.shape === "Circle") {
    const circleLogo = new Circle(data.text, data.textColor, data.shapeColor);
    return circleLogo.render();
  } else if (data.shape === "Triangle") {
    const triangleLogo = new Triangle(
      data.text,
      data.textColor,
      data.shapeColor
    );
    return triangleLogo.render();
  } else {
    const squareLogo = new Square(data.text, data.textColor, data.shapeColor);
    return squareLogo.render();
  }
}

module.exports = generateLogo;
