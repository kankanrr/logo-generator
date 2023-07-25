function generateLogo(data) {
  return `<svg height="300" width="200">
    <circle cx="100" cy="100" r="80" fill="${data.shapeColor}" />
    <text x="55" y="115" font-size="4em" fill="${
      data.textColor
    }">${data.text.toUpperCase()}</text>
  </svg>`;
}

module.exports = generateLogo;
