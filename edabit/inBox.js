function inBox(arr) {

  for (let i=0; i<arr.length; i++){
    let element = arr[i]; 
    //console.log(element)

    if (element.includes('*')){
      return true
    }
  }
  return false
}

//check if a box contains an asterisk