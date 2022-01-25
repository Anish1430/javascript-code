function binarySearch(arr, x)
{   
    let n1 = 0;
    let n2 = arr.length - 1;
    let mid;
    while (n2 >= n1) {
         mid = n1 + Math.floor((n2 - n1) / 2);
        if (arr[mid] == x)
            return mid;
  
        if (arr[mid] > x)
            n2 = mid - 1;
        else
            n1 = mid + 1;
    }
    return -1;
}
    let Array1= [5,6,7,8,9,2,3,1,0];
    let arr = Array1.sort();
    let x = 8;
    let n = arr.length;
    let result = binarySearch(arr, x);
    
    console.log(result);