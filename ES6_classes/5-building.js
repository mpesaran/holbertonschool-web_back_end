export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Class is of abstract type and cannot be instantiated');
    }
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be number');
    }
    this._sqft = sqft;

    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
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
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
