export default function hasValuesFromArray(set, array) {
  if (!Array.isArray(array)) {
    throw new Error('must be an array');
  }
  return array.every((element) => set.has(element));
}
