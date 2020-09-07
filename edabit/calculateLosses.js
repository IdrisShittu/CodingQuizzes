function calculateLosses(obj) {
var num = Object.values(obj)
var sum = 0

if (Object.keys(obj).length === 0) {
	return 'Lucky you!'
}

for (var i = 0; i < num.length; i++) {
  sum += num[i]
}
return sum
}