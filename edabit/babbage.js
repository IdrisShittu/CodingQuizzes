function babbage(n) {
	if (n === 269696)
		return 'Babbage was incorrect!'
  	for (let i = 0; i < n; i++)
	  	if (String(i ** 2).endsWith(n))
  			return i
}