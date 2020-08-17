function testJackpot(result) {

let key = result[0]
for(let i=0; i<result.length; i++){
if (result[i]!== key){return false}
}
return true	
}
//checks if all element are identical