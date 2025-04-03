const CarCloneSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    if (typeof motor !== 'string' || typeof color !== 'string' || typeof brand !== 'string') {
      throw new Error('brand, motor, nad color must be string');
    }
    this._color = color;
    this._brand = brand;
    this._motor = motor;
  }

  [CarCloneSymbol]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[CarCloneSymbol]();
  }
}
