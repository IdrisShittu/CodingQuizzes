function mean(num) {
	var str = "" + Math.abs(num)
	var arr = str.split("")
	var sum = 0
	for(var i = 0; i < arr.length; i++)
		{
			sum += Number(arr[i])
		}
	return sum/arr.length
}
//mean of all digits