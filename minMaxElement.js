function findMinRec(arr, n)
{
    if (n == 1){
         return arr[0];
    }
     else{
         return Math.min(arr[n - 1],
        findMinRec(arr, n - 1));
     }
}

function findMaxRec(arr, n)
{
    if (n == 1){
         return arr[0];
    }
     else{
    return Math.max(arr[n - 1],
        findMaxRec(arr, n - 1));     
     }     
}

let arr = [ 7,-1,0,2,-2,6,-6,10,-4 ];
let n = arr.length;
console.log("Minimum Element is : " + findMinRec(arr, n));
console.log("Maximum Element is : "+ findMaxRec(arr, n));