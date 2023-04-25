
let PrincipalAmount = prompt('enter the principal amount');

let rateOFannulInterest = prompt('enter the rate of annual interest');

let durationOfLoanInMonths = prompt('enter the duration of loan in months')

let r = rateOFannulInterest/12/100

console.log("the value of r is",r);

let n = durationOfLoanInMonths;

let P = PrincipalAmount;

x=(1+r)**n;

console.log("X",x)

y=(((1+r)**n)-1);

console.log("Y",y)

let k = x/y

console.log("the value of k",k)

let E = P*r*k

console.log('the value is',E);

alert('you have to pay '+ E +  `
amount every month to repay your entire loan amount in ${durationOfLoanInMonths} months with ${rateOFannulInterest}% of annual interest rate`)

