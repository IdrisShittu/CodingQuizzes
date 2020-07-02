'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr,n) {
    var pos=0
    var neg=0
    var zer=0
   
    for(let i=0; i<n; i++){
        if(arr[i]>0) pos++
        else if(arr[i]<0) neg++
        else zer++
    }

    console.log(+(pos/n).toFixed(6))
    console.log(+(neg/n).toFixed(6))
    console.log(+(zer/n).toFixed(6))

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr,n);
}
