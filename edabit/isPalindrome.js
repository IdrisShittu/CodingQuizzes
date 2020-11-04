function isPalindrome(wrd, reversed = '', index = 1) {
		if (reversed.length === wrd.length){
			if (wrd === reversed){
				return true
			} else{
				return false
			}
		}
	reversed += wrd[wrd.length - index]
	index ++
	return isPalindrome(wrd, reversed, index)
}