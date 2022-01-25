// program to reverse a string

// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// const string = "Anish";

// const result = reverseString(string);
// console.log(result); //Hsina is Output //


//Another way to Reverse the set String Like This //
function reverse(s)
{
  let str = [];
  let temp = "";
  for(let i = 0; i < s.length; i++)
  {
    if(s[i] == ' ')
    {
      str.push(temp);
      temp = "";        
    }
    else
    {
      temp = temp + s[i];
    }
   
  }
  str.push(temp);
   
  while(str.length != 0)
  {
    temp = str[str.length - 1];
    console.log(temp + " ");
    str.pop();
  }
}
 
let s = "My Name is Anish";
reverse(s); 