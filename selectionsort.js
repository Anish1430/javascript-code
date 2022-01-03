function selectionSort(arr) { 
    let n = arr.length;
        
    for(let i = 0; i < n; i++) {
        let minIndex = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[minIndex]) {
                minIndex=j; 
            }
         }
         if (minIndex != i) {
             // Swap the element
             let temp = arr[i]; 
             arr[i] = arr[minIndex];
             arr[minIndex] = temp;      
        }
    }
    return arr;
}

let ans= selectionSort([1,5,2,10,66,7,-5,4,100]);
console.log(ans);