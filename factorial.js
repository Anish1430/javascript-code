var num=5,ans=1;
function factorial(n)
    {
        for (let i = 2; i <= n; i++)
            ans =ans*i;
        return ans;
    }
        console.log("Factorial of " + num + " is " + factorial(5));