function checkScore(str) {
	let a = str.flat().map(x=>{
		switch(x){
				case('#'):
				return 5
				case('O'):
				return 3
				case('X'):
				return 1
				case('!'):
				return -1
				case('!!'):
				return -3
				case('!!!'):
				return -5
		}
	}).reduce((a,b)=>a+b,0) 
	return a > 0 ? a : 0;
}