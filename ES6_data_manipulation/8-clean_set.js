export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((element) => (element.startsWith(startString)))
    .map((element) => element.slice(startString.length))
    .join('-');
}
