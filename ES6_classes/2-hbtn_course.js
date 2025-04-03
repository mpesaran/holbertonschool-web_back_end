export default class HolbertonCourse {
  // Constructor to initialize the object attributes
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name;

    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = length;

    if (!Array.isArray(students) || !students.every((s) => typeof s === 'string')) {
      throw new Error('Students must be an array of strings');
    } else {
      this._students = students;
    }
  }

  // Getter for 'name'
  get name() {
    return this._name;
  }

  // Setter for 'name'
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }

  // Getter for 'length'
  get length() {
    return this._length;
  }

  // Setter for 'length'
  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = value;
  }

  // Getter for 'students'
  get students() {
    return this._students;
  }

  // Setter for 'students'
  set students(value) {
    if (!Array.isArray(value) || !value.every((s) => typeof s === 'string')) {
      throw new Error('Students must be an array of strings');
    }
    this._students = value;
  }
}
