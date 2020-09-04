function multiplyNums(nums) {
	var sp = nums.split(' ');
	var mtple = 1;
	for(let i = 0; i < sp.length; i++){
		mtple = mtple*parseInt(sp[i]);
	}
	return mtple;
}
