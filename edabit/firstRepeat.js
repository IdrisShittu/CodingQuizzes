function firstRepeat(chars) {
	let arr = chars.split('');
  for(x = 0; x < arr.length; x++) {
		if(chars.indexOf(arr[x]) != chars.lastIndexOf(arr[x])) return arr[x];
	}
	return '-1';
}