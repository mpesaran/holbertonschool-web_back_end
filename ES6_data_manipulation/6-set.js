export default function setFromArray(array) {
  // const resultSet = new Set();
  if (!Array.isArray(array)) {
    throw new Error('must be an array');
  }
  return new Set(array);
}
