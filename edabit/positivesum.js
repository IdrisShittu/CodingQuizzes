const positiveSum = (chars) => {
    return chars.match(/-?\d+/g)
    .filter(number => number > 0)    
    .reduce((prev,current) => parseInt(prev) + parseInt(current),0)
};
//sum of positive sum.