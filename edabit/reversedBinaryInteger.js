function reversedBinaryInteger(num) {
  return Number.parseInt(num.toString(2).split('').reverse().join(''), 2);
}