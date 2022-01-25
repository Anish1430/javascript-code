let MAX_CHAR = 26;
function sortString(str)
{

    let letters=new Array(MAX_CHAR);
    for(let i=0;i<MAX_CHAR;i++)
    {
        letters[i]=0;
    }
     
    for(let x=0;x<str.length;x++)
    {
       
            letters[str[x].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
        for (let i = 0; i < MAX_CHAR; i++) {
            for (let j = 0; j < letters[i]; j++) {
                console.log(String.fromCharCode(i + 'a'.charCodeAt(0)));
            }
        }
 
}
sortString("anish");