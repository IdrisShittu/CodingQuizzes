function clone(arr) {
  const copy = arr.map(el => el);
  arr.push(copy);
	return arr;
}