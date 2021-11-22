let n = 5;
let string = "";
  //loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) { //means suppose 1=1 so 1*2=2 and i*2-1=1) it printing like this
    string += "*";
  }
  //new line for each row//
  string += "\n";
}
// loop for reverse pyramid//
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star//(*)
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  //new line for each row//
  string += "\n";
}
console.log(string);