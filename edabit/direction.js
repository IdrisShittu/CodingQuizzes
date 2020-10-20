function direction(arr) {
	const letterSwap = {'e' : 'w', 'E' : 'W', 'a' : 'e', 'A' : 'E'};
	return arr.map(str => str.replace(/e|E|a|A/g, char => letterSwap[char]));
}