export function percentDifference(a, b) {
  return +(100 * Math.abs(((a - b) * 2) / (a + b))).toFixed(2);
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}
