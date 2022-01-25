function power(x, y)
{
    if (y == 0)
        return 1;
    else if (y % 2 == 0)
        return power(x, parseInt(y / 2, 10)) *
               power(x, parseInt(y / 2, 10));
    else
        return x * power(x, parseInt(y / 2, 10)) *
                   power(x, parseInt(y / 2, 10));
}
let x = 2;
let y = 5;
console.log(power(x, y));