/* eslint-disable prettier/prettier */
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}
export class Triangle implements Figure {
  color: Color;

  shape = Shape.Triangle;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Triangle side must be greater than zero.');
    }

    const max = Math.max(this.a, this.b, this.c);

    if (max >= this.a + this.b + this.c - max) {
      throw new Error(
        'The longest side of triangle must be lower than a sum of two others.',
      );
    }
  }

  getArea(): number {
    const area =
      (1 / 4) *
      Math.sqrt(
        (this.a + this.b + this.c) *
          (this.b - this.a + this.c) *
          (this.a - this.b + this.c) *
          (this.a + this.b - this.c),
      );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  color: Color;

  shape = Shape.Circle;

  radius: number;

  constructor(color: Color, radius: number) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Radius must be greater than zero.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: Color;

  shape = Shape.Rectangle;

  height: number;

  width: number;

  constructor(color: Color, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0) {
      throw new Error('Width must be greater than zero.');
    }

    if (this.height <= 0) {
      throw new Error('Height must be greater than zero.');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
