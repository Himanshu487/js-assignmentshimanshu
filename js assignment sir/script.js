
function calculateValue(event){
event.preventDefault();

    let principalAmount = document.getElementById('principalAmount').value;
    let rateOfannulInterest = document.getElementById('rateOfannulInterest').value;
    let durationOfLoanInMonths = document.getElementById('durationOfLoanInMonths').value;

    let checkV = document.getElementById("result");

console.log("checkV",checkV);

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

// alert('you have to pay '+ EMI +  `
// amount every month to repay your entire loan amount in ${durationOfLoanInMonths} months with ${rateOfannulInterest}% of annual interest rate
// and the total amount to be paid will be ${totalAmounttpbePaid}`);

// console.log("checkV.innerHTML ",checkV.innerHTML )


// checkV.innerHTML = `you have to pay ${EMI}
// amount every month to repay your entire loan amount in ${durationOfLoanInMonths} months with ${rateOfannulInterest}% of annual interest rate
// and the total amount to be paid will be ${totalAmounttpbePaid}`;
console.log(typeof EMI, typeof durationOfLoanInMonths,typeof rateOfannulInterest, typeof totalAmounttpbePaid)
console.log( EMI,  durationOfLoanInMonths, rateOfannulInterest, totalAmounttpbePaid)


checkV.innerHTML = `you have to pay ${EMI}
amount every month to repay your entire loan amount in ${Number(durationOfLoanInMonths)} months with ${Number(rateOfannulInterest)}% of annual interest rate
and the total amount to be paid will be ${totalAmounttpbePaid}`;


}

// calculateValue();