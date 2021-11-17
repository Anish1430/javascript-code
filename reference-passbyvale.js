// // Primitive Data types

 let number=10;
// PAss by Value
let number_2=number;
number=15;
console.log(number);
console.log(number_2);

// Reference Data-Types//
let obj={number:10};
// Pass by Reference//
let obj2=obj;
console.log(obj);
console.log(obj2)


const course={
    title:'JavaScript',
    enroll() {
        console.log("You are Succesfully enrolled");
    }
}
for(let key in course) {
    console.log(key, course[key]);
}