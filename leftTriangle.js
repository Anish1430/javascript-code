let n = 5; //rows and column //
let string = "";
for (let i = 1; i <= n; i++) {   //external loop
  for (let j = 0; j < i; j++) {   //internal loop
    string += " *"; //"space after increment" //
  }
  string += "\n";
}
console.log(string);