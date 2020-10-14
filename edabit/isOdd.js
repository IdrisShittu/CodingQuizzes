function isOdd(number) {
  return number & 1 ? 'Yes' : 'No';
}
function isEven(number) {
  return number.match(/[02468]$/g)  ? 'Yes' : 'No';
}
//