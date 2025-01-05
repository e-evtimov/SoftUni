function schoolSupplies(packsOfPens, packsOfMarkers, litersCleaningAgent, discountPercentage) {
    pensPrice = packsOfPens * 5.80;
    markersPrice = packsOfMarkers * 7.20;
    cleaningPrice = litersCleaningAgent * 1.20;
    price = pensPrice + markersPrice + cleaningPrice;
    discount = discountPercentage / 100 * price;
    finalPrice = price - discount;
    console.log(`${finalPrice}`);
}
