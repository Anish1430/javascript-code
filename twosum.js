function twosum(num, target)
 {
    let Start = 0;
    let End = num.length - 1;
    while (Start < End) 
    {
        const total = num[Start] + num[End];
      if (total > target)
       {
        End--;
      }
       else if (total < target) {
        Start++;
      }
       else {
        return [Start + 1, End + 1];
      }
    }
  };
let answer = twosum([4,8,10,15],19)

console.log(answer);