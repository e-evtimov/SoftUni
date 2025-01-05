function foodDelivery(chickenMenuAmount, fishMenuAmount, vegetarianMenuAmount) {
    let chickenPrice = chickenMenuAmount * 10.35;
    let fishPrice = fishMenuAmount * 12.40;
    let vegetarianPrice = vegetarianMenuAmount * 8.15;
    let combinedPrice = chickenPrice + vegetarianPrice + fishPrice;
    let dessertPrice = combinedPrice * 20 / 100;
    let deliveryPrice = 2.50 ;
    let finalPrice = combinedPrice + dessertPrice + deliveryPrice;
    console.log(finalPrice);
}


