function depositCalculator(depositAmount, depositDuration, interestRate ) {
    let yearlyInterest = depositAmount * interestRate / 1200;
    let interest = yearlyInterest * depositDuration;
    let sum = depositAmount + interest;
    console.log(`${sum}`)
}

depositCalculator(2350, 6,  7)