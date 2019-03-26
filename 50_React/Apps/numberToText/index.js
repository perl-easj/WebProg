const shortPriceText = (price) => {
    if (price < 10000) {
        return price;
    }
    if (price < 1000000) {
        return Math.round(price / 1000).toString() + "k";
    }

    return Math.round(price / 1000000).toString() + "m";
}

const shortLOCSText = (locs) => {
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

const toText = (value, cutoffValue = 10000) => {
    return (value < cutoffValue) ? standardNumberText(value) : abbreviatedNumberText(value);
}

const standardNumberText = (value) => {
    return toTextWithDecimalsMax(value, 1);
}

const toTextWithDecimalsMax = (value, maxDecimals) => {
    return value.toLocaleString(undefined, { maximumFractionDigits: maxDecimals })
}

const toTextWithDecimalsMinMax = (value, minDecimals, maxDecimals) => {
    return value.toLocaleString(undefined, { minimumFractionDigits: minDecimals, maximumFractionDigits: maxDecimals })
}

const abbreviatedNumberText = (value) => {
    let tenBase = (value < 1) ? 0 : Math.floor(Math.log10(value));
    let dividerBase = tenBase < 3 ? 0 : tenBase - (tenBase % 3);
    let fracDigits = tenBase < 6 ? 0 : 3 - (tenBase % 3);

    return toTextWithDecimalsMinMax((Math.floor(value) / Math.pow(10, dividerBase)), fracDigits, fracDigits) + tenBaseToAbbreviation(tenBase, 4);
}

const tenBaseToAbbreviation = (tenBase, cutoff = 6) => {
    if (tenBase < cutoff) return "";
    if (tenBase < 6) { return "k"; }
    if (tenBase < 9) { return "M"; }
    if (tenBase < 12) { return "B"; }
    if (tenBase < 15) { return "T"; }
    if (tenBase < 18) { return "Qa"; }
    if (tenBase < 21) { return "Qi"; }
    if (tenBase >= 21) { return "10^" + tenBase; }

    return "";
}



const testNumbers = [0.1, 0.9, 1, 1.0, 1.1, 8.9, 9.9, 10, 10.1, 11, 99, 100, 100.1, 999, 999.9, 1000, 1000.1, 
                    1001, 9999, 9999.9, 10000, 10000.1, 10001.1, 11000, 98999, 99999, 99999.9, 100000, 101000, 998999, 999000, 999999,
                    1000000, 1010000, 1100000, 9890000, 9990000, 9999999, 10000000, 10100000, 11000000, 99000000, 99999999, 100000000, 101000000, 110000000, 989000000, 999000000, 999999999,
                    1000000000, 1010000000, 1100000000, 9890000000, 9990000000, 9999999000, 10000000000, 10100000000, 11000000000, 
                    99000000000, 99999999000, 100000000000, 101000000000, 110000000000, 989000000000, 999000000000, 999999999000,
                    1000000000000, 9000000000000, 1000000000000000, 9000000000000000];

const test = () => {
    testNumbers.forEach((value) => {
        console.log(value + " -> " + toText(value));
    });
}

test();