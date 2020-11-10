function isPalindrome(wrd) {
	// your recursive solution here
	if (wrd.length == 1)
		return true;
	if (wrd[0] !== wrd[wrd.length-1])
		return false;
	return isPalindrome(wrd.slice(1, wrd.length-1))
}