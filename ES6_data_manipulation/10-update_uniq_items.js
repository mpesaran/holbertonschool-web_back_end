export default function updateUniqueItems(map) {
  for (const [item, quantity] of map) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
  return map;
}
