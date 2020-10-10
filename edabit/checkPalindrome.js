function checkPalindrome(str) {
	let reverse = str.split('').reverse().join('');
	let result = (str === reverse) ? true : false;
	return result;
}
