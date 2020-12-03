function printgrid(rows, cols) {
  let arr = []
  for(let a=1; a<=rows; a++){
    let temArr = []
    arr.push(temArr)
    for(let i=a; i<cols*rows+1; i+=rows){
      temArr.push(i)
    }
  }
  return arr
}