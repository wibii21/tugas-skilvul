const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr,i=0) {
    if (i >= arr.length){
        return 0;
    }
    const sum = sumOfArray(arr, i + 1);
    return arr[i] + sum;
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));