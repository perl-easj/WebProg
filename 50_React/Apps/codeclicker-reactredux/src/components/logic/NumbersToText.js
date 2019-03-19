export const shortPriceText = (price) => {
    if (price < 10000) {
        return price;
    }
    if (price < 1000000) {
        return Math.round(price / 1000).toString() + "k";
    }

    return Math.round(price / 1000000).toString() + "m";
}

export const shortLOCSText = (locs) => {
    let base = Math.floor(Math.log10(locs + 1)) + 1;

    let dividerBase = base <= 6 ? 0 : (base - 1) - ((base - 1) % 3);
    let fracDigits = base <= 6 ? 0 : 3 - ((base - 1) % 3);

    let abbrev = "";
    if (base > 6) { abbrev = "M"; }
    if (base > 9) { abbrev = "B"; }
    if (base > 12) { abbrev = "T"; }
    if (base > 15) { abbrev = "10^" + base; }

    return withDecimals((Math.floor(locs) / Math.pow(10, dividerBase)), fracDigits) + abbrev;
}

export const withDecimals = (value, decimals) => {
    return value.toLocaleString(undefined, { maximumFractionDigits: decimals })
}

