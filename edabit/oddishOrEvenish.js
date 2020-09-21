function oddishOrEvenish(num) {
	let arr=Array.from(String(num), Number);
	let sum = arr.reduce((a,b)=>{
		return a+b
	},0);
	if (sum%2===0) return "Evenish";
	return "Oddish"
}