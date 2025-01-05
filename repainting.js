function repainting(nylonNeeded, paintNeeded, diluentNeeded, hoursNeeded) {
    let nylonPrice = nylonNeeded * 1.50 + 3 ;
    let paintPrice = 110 / 100 * paintNeeded * 14.50;
    let diluentPrice = diluentNeeded * 5;
    let bagPrice = 0.4;
    let materialsPrice = nylonPrice + paintPrice + diluentPrice + bagPrice;
    let workersPrice = materialsPrice * 30 / 100 * hoursNeeded;
    finalPrice = materialsPrice + workersPrice;
    console.log(finalPrice);
}


