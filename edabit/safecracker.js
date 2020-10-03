function safecracker(start, increments) {
	let res = [];
	for (let i = 0; i < increments.length; i ++){
		if (i%2 == 0){
			if (start >= increments[i]){
				start = (start - increments[i]);
				res.push(start);
			}else{
				start = 100 - (increments[i] - start);
				res.push(start);
			}
		}else{
			if (start + increments[i] <= 99){
				start = start + increments[i];
				res.push(start);
			}else{
				start = (start + increments[i]) - 100;
				res.push(start);
			}
		}
	}
	return res;
}