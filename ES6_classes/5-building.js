export default class Building {
  constructor(sqft) {
    if (this.constructor === Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      Building.evacuationWarningMessage();
    }

    // Validate sqft
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method placeholder
  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
