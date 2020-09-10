function maskify(str) {
  var x = str.length;
  var output = "";
  for(var i = 0; i< x - 4;i++)
    {
      output += "#";
    }
   return output + str.substring(x-4,x);
  
}