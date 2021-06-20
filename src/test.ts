interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

class Square {
  constructor(public width: number) {}
}

class Rectangle extends Square {}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

/**
 * Rectagle은 타입이기 때문에 런타임 시점에서는 아무 역할을 하지 못한다.
 * @param shape
 * @returns
function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;
  }
}
*/

/**
 * 
 * @param shape 
 * @returns 
function calculateArea(shape: Shape) {
  if ('height' in shape) {
    shape; // type이 Rectangle
    return shape.width * shape.height;
  } else {
    shape; // type이 Square
    return shape.width * shape.width;
  }
}
*/
