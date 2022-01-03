function BubbleSort(arr)
{
    for(let i=0;i<arr.length-1;i++){
        for(let j=0; j<(arr.length-i-1);j++)
        {
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1]= temp;
            }
        }
    }
    return arr;
}
let ans = BubbleSort([5,2,10,80,34,77,94,0,10,6]);

console.log(ans);