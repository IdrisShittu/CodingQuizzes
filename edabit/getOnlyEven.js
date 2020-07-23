function getOnlyEvens(nums) {
	return nums.filter((item,index) => !(item % 2) && !(index % 2))
}