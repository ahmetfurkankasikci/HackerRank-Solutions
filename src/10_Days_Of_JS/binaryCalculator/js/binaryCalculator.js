var ar = new Array("+", "-", "x", "÷");
const cnt = document.getElementById("btns");
const res=document.getElementById("res")

var add=(a,b)=> {
    if(b == 0)
        return a;

    return add( a ^ b, (a & b) << 1);
}

var multiply=(n, m)=>{
    let ans = 0, count = 0;
    while (m)
    {
        if (m % 2 == 1)            
            ans += n << count;
 
        count++;
        m = Math.floor(m / 2);
    }
    return ans;
}

 var divide=(dividend, divisor)=> {
 
   
    let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;
     
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
     
    
    let quotient = 0;
    while (dividend >= divisor) {
        dividend -= divisor;
        ++quotient;
    }
     
    return sign * quotient;
}

var subtract=( x, y)=>
{
    if (y == 0)
        return x;
    return subtract(x ^ y, (~x & y) << 1);
}

cnt.addEventListener("click",e=>{
    if(e.target.id=="btnClr"){
        res.innerText=" "
    }else if(e.target.id=="btnEql"){
        var numbers = res.innerText.split(/[+,-,/,*]/g).map(Number);
        var operators = res.innerText.replace(/[0-9]/g, " ").split(" ");

        var div = operators.indexOf("/");
        while (div != -1) {
            let yedek = divide(div-1,div);

            operators.splice(div, 1);
            numbers.splice(div - 1, 2, yedek);

            div = operators.indexOf("/");
        }

        var mul = operators.indexOf("*");
        while (mul != -1) {
            let yedek = multiply(mul,mul-1);

            operators.splice(mul, 1);
            numbers.splice(mul - 1, 2, yedek);

            mul = operators.indexOf("*");

        }

        var sum = operators.indexOf("+");
        while (sum != -1) {
            let yedek = add(sum-1,sum);

            operators.splice(sum, 1);
            numbers.splice(sum - 1, 2, yedek);

            sum = operators.indexOf("+");

        }

        var sub = operators.indexOf("-");
        while (sub != -1) {
            let yedek = subtract(sub-1,sub);

            operators.splice(sub, 1);
            numbers.splice(sub - 1, 2, yedek);

            sub = operators.indexOf("-");

        }
        
            res.innerText = numbers[0];

    }
    else{
       res.innerText+=`${e.target.innerText}`;
    }
})