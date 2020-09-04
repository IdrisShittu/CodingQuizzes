function missingNum(arr) {
  for(var i = 1; i <= 10; i++){
    if(arr.indexOf(i) == -1) return i
  }
}
//find missing number in a sequence