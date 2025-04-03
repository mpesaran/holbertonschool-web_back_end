export default class Building {
  constructor(sqft) {
    if (this.contructor === Building) {
      throw new Error("Class is of abstract type and can't be instantiated");
    }
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('sqft must be number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
