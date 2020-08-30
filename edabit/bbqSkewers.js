function bbqSkewers(grill) {

  let countX = 0; 
  let countO = 0; 

  let newArray = []; 

  for (let i=0; i<grill.length; i++){
    let element = grill[i]

    if (element.includes('x')){
      countX += 1
      console.log(countX)
    }

    else if (element.includes('o')){
      countO += 1
      console.log(countO)
    }
  }
  newArray.push(countO, countX)
  return newArray
}