export default function appendToEachArrayValue(array, appendString) {
  let results = []
  for (let value of array) {
    results.push(appendString + value);
  }

  return results;
}
