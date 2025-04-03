export default class Building {
  constructor(sqft) {
    // Prevent direct instantiation
    // if (this.constructor === Building) {
    //   throw new Error("Class is of abstract type and cannot be instantiated");
    // }

    // Check for method implementation in subclass
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error("Class extending Building must override evacuationWarningMessage");
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
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
