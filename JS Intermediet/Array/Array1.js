///Soal 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) { 
    let reverseArr = [];
    let reverseNumber = '';
    for(let i = arr.length; i--;){
        reverseNumber += arr[i];
        reverseArr.push(arr[i])
    }
    return reverseArr;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, ", ", newArr);
console.log(arr2, ", ", newArr2);

///Soal 2


//Soal 3
