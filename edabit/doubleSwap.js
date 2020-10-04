function doubleSwap(str, c1, c2) {
  arr = []
  for(i=0;i<str.length;i++){
    if(str[i]==c1){
      arr.push(c2)
    }else if(str[i]==c2){
      arr.push(c1)
    }else{
      arr.push(str[i])
    }
  }
return arr.join('')
}