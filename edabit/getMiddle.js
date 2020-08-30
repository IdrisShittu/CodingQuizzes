function getMiddle(str) {
  var length = str.length;
  if (length % 2 == 0) {
    let start = length / 2 - 1;
		return str.slice(start, start + 2);
  } else {
    let start = (length - 1) / 2;
    return str.slice(start, start + 1)
  }
}
//get middle element