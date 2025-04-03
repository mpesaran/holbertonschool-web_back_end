export default class Building {
  constructor(sqft) {
    // Prevent direct instantiation
    if (new.target === Building) {
      throw new Error("Class is of abstract type and cannot be instantiated");
    }

    // Validate implementation of evacuationWarningMessage
    const proto = Object.getPrototypeOf(this);
    const superProto = Building.prototype;
    const missing = Object.getOwnPropertyNames(superProto).find(
      (name) => typeof superProto[name] === "function" && !proto.hasOwnProperty(name)
    );

    if (missing) {
      throw new TypeError(`${this.constructor.name} needs to implement ${missing}`);
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

  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
