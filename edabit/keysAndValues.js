function keysAndValues(obj) {
  var key = [];
  var obj1 = [];
  for (var i in obj){
    key.push(i);
    obj1.push(obj[i]);
  }
  return [key,obj1];
}
//takes an object and returns the keys and values as separate arrays.