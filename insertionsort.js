function insertionSort(Arr) {
    let n = Arr.length;
        for (let i = 1; i < n; i++) {
            
            let currentElement = Arr[i];
            
            let j = i-1; 
            while ((j > -1) && (currentElement < Arr[j])) {
                Arr[j+1] = Arr[j];
                j--;
            }
            Arr[j+1] = currentElement;
        }
    return Arr;
}

let ans = insertionSort([7,2,1,5,77,6,2,3,7]);
console.log(ans);