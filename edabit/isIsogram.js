function isIsogram(str) {
  var sorted = str.toLowerCase().split('').sort();
  for(i = 0; i < sorted.length-1; i++){
    if(sorted[i] == sorted[i+1]){
      return false;
    }
  }
  return true;
}