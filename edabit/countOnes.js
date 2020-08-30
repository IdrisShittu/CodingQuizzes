function countOnes(i) {
  var  result = 0;
  for( ;i>0 ;){
    if(i%2 === 1){ result++; }
    i = Math.floor((i/2)); 
  }
  return result;
}
//count number of ones in the binary representation of number