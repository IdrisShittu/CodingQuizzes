function toArray(obj) {
  let keys=[];
  for(let key in obj){
    keys.push(key)
  }
  return keys.map(cur=>[cur,obj[cur]])
}

//convert object to array