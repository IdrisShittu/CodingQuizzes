function inclusiveArray(startNum, endNum) {
    if (endNum <= startNum) return [startNum];
    else {
        let arr = inclusiveArray(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }
}