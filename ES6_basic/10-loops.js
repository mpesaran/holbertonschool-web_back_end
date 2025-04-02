export default function appendToEachArrayValue(array, appendString) {
  const results = [];
  for (const value of array) {
    results.push(appendString + value);
  }

  return results;
}
