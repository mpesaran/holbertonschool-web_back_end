export default class Building {
  constructor(sqft) {
    this.constructor = this.evacuationWarningMessage();
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
