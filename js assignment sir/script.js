
function calculateValue(){


    let principalAmount = document.getElementById('principalAmount').value;
    let rateOfannulInterest = document.getElementById('rateOfannulInterest').value;
    let durationOfLoanInMonths = document.getElementById('durationOfLoanInMonths').value;

    console.log("principalAmount",principalAmount)
    console.log("rateOfannulInterest",rateOfannulInterest)
    console.log("durationOfLoanInMonths",durationOfLoanInMonths)

    // console.log("the value of event",event.target.id)

// let principalAmount = prompt('enter the principal amount');

// let rateOfannulInterest = prompt('enter the rate of annual interest');

// let durationOfLoanInMonths = prompt('enter the duration of loan in months')

let rateOfInterestOnMonthlyBasis = rateOfannulInterest/12/100

// console.log("the value of r is",r);

// let n = durationOfLoanInMonths;

// let P = principalAmount;

let numeratorValue = (1+rateOfInterestOnMonthlyBasis)**durationOfLoanInMonths;

// console.log("X",x)

let denominatorValue = (((1+rateOfInterestOnMonthlyBasis)**durationOfLoanInMonths)-1);

// console.log("Y",y)

// let k = x/y
let calValue = numeratorValue/denominatorValue;

// console.log("the value of k",k)

// let E = P*r*k
let EMI = principalAmount*rateOfInterestOnMonthlyBasis*calValue

// console.log('the value is',EMI);

let totalAmounttpbePaid = EMI*durationOfLoanInMonths;

alert('you have to pay '+ EMI +  `
amount every month to repay your entire loan amount in ${durationOfLoanInMonths} months with ${rateOfannulInterest}% of annual interest rate
and the total amount to be paid will be ${totalAmounttpbePaid}`);

}