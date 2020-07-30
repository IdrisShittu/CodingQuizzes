function XO(str) {
  var x = 0, o = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      x += 1;
    } else if (str[i].toLowerCase() == 'o') {
      o += 1;
    }
  }
  return x === o;
}