// row or column count
let n = 7;
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    string += "*";
  }
 //You  used this line to print in same  direction like(******* ******* ******* ******* ******* into 7 times)
//    string += "";
     // newline after each row
     string +="\n";
}
// printing the string
console.log(string);