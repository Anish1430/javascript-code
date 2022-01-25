function Average(arr, n)
{
    if (n== 1)
    {
        return arr[n- 1];
    }
    else
    {
        return ((Average(arr, n - 1) * (n - 1) + arr[n - 1]) / n);
    }
}
 
let arr = [1, 2, 3, 4, 5];
let n= arr.length;
let ans = Average(arr, n);
console.log(ans);