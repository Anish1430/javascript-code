var intersectionofArray=(num1,num2)=>{
    let inter=[];
    const setnum1=new Set(num1);
    const setnum2=new Set(num2);
    if(setnum1.length<setnum2.length){
        [setnum1,setnum2]=[setnum2,setnum1]
    }
    setnum1.forEach(nums => {
        if(setnum2.has(nums)){
            inter.push(nums)
        }

    });
return inter;
}
let num1=[4,6,3,2,10,15];
let num2=[2,10,15];
console.log(intersectionofArray(num1,num2));