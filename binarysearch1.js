function binary_search(Array, target) {
    var s = 0,
      mid = 0,
      l = 6;
  
    while (s<= l) {

      //mid Array
      mid = parseInt((s+l) / 2);
  
      if (target == Array[mid]) {
        return mid;
      } else if (target < Array[mid]) 
      {
                     //if targetElement is less than the  array of mid then the search is left side of the array.

        l = mid - 1;
      }
       else 
       {
                   //if targetElement  is greter than  the array of mid then the search in right side of the array is:-
        s = mid + 1;
      }
    }
    return -999;
  }
  function search() {
    var Array = [1, 5, 7, 8, 9, 10, 15];
    var target = 4;
    var index = binary_search(Array, target);
    if (index >= 0) 
    {
      console.log(index + 1);
    } else {
      console.log("-1");
    }
  }
  search();