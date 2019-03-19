const buyBoosterButtonGeneral = "ui mini ";
const buyBoosterButtonCannotBuy = "red ";
const buyBoosterButtonCanBuy = "green ";
const buyBoosterButtonHaveBought = "blue ";

const cannotBuyButtonState = buyBoosterButtonGeneral + buyBoosterButtonCannotBuy + "disabled button";
const canBuyButtonState =  buyBoosterButtonGeneral + buyBoosterButtonCanBuy + "button";
const boughtButtonState = buyBoosterButtonGeneral +buyBoosterButtonHaveBought + "disabled button";

const buyWorkerButtonGeneral = "ui large ";
const buyWorkerButtonEnabled = "green";
const buyWorkerButtonDisabled = "red disabled";

export const buyBoosterButtonState = (locCount, price, owned) => {
    if (owned) { return boughtButtonState; }
    if (locCount < price) { return cannotBuyButtonState; }
    if (locCount >= price) { return canBuyButtonState; }
}

export const buyBoosterButtonText = (owned) => {
    if (owned) { return "OWNED"; }
    return "BUY!"
}

export const buyWorkerButtonState = (locCount, price) => {
    return buyWorkerButtonGeneral + ((locCount >= price) ? buyWorkerButtonEnabled : buyWorkerButtonDisabled) + " button";
}

export const producerButtonState = () => {
    return "ui huge green button";
}