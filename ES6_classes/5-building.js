export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error("Class is of abstract type and cannot be instantiated");
    }
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = sqft;
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    // Ensure subclasses implement this method
    if (this.constructor === Building) {
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }
  }
}
