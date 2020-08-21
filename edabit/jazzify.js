function jazzify(arr) {
  for(let i=0; i<arr.length; i++)
    {
      if(arr[i][arr[i].length-1] != '7')
        {
          arr[i] = arr[i] + '7';
        }
    }
  return arr;
}
//concatenate 7 to all element of an array that doesn't have 7