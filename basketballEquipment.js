function basketballEquipment(yearlyTrainingPrice) {
    let basketballShoes = yearlyTrainingPrice * 60 / 100;
    let basketballKit = basketballShoes * 80 / 100;
    let basketBall = basketballKit / 4;
    let accessories = basketBall / 5;
    let expenses = yearlyTrainingPrice + basketballShoes + basketballKit + basketBall + accessories;
    console.log(`${expenses}`)
}


