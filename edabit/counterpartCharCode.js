function counterpartCharCode(char) {
	if (char == char.toUpperCase()) {
    return char.toLowerCase().charCodeAt(0);
  } else {
    return char.toUpperCase().charCodeAt(0);
  }
}
//returns char charcode