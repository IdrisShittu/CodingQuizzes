function solve(eq) {
	let arr = eq.split(" ")
  if(arr[1]==="+"){
    return eval(arr[4])-eval(arr[2])
  }
  if(arr[1]==="-"){
    return eval(arr[2]+"+"+arr[4])
  }  
}q