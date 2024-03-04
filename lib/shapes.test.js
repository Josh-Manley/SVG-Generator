const {Circle, Square, Triangle} = require('./shapes.js');

// testing if expected svg is rendering the same triangle element as actual svg
describe("Triangle", () => {
    test("should render svg for a polygon element", () => {
      const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
      const triangle = new Triangle();
      triangle.setColor("purple");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    // testing if expected svg is filling the same color as actual svg
    test("should accept a fillColor param", () => {
      const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
      const triangle = new Triangle();
      triangle.setColor("purple");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });
  // testing if expected svg is rendering the same circle element as actual svg
  describe("Circle", () => {
    test("should render svg for a green polygon element", () => {
      const expectedSvg =
        '<circle cx="150" cy="100" r="80" fill="green" />';
      const circle = new Circle();
      circle.setColor("green");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    // testing if expected svg is filling the same color as actual svg
    test("should accept a fillColor param", () => {
      const expectedSvg =
        '<circle cx="150" cy="100" r="80" fill="green" />';
      const circle = new Circle();
      circle.setColor("green");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });
  // testing if expected svg is rendering the same square element as actual svg
  describe("Square", () => {
    test("should render svg for a green polygon element", () => {
      const expectedSvg =
        '<rect x="90" y="40" width="120" height="120" fill="turquoise" />';
      const square = new Square();
      square.setColor("turquoise");
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    // testing if expected svg is filling the same color as actual svg
    test("should accept a fillColor param", () => {
      const expectedSvg =
        '<rect x="90" y="40" width="120" height="120" fill="turquoise" />';
      const square = new Square();
      square.setColor("turquoise");
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });