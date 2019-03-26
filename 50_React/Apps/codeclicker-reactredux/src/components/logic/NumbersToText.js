export const toText = (value, cutoffValue = 10000) => {
    return (value < cutoffValue) ? standardNumberText(value) : abbreviatedNumberText(value, 3);
}

export const toTextNoDec = (value, cutoffValue = 10000) => {
    return (value < cutoffValue) ? standardNumberText(value, 0) : abbreviatedNumberText(value, 0);
}

export const toTextFixedDecBelowCutoff = (value, decimals, cutoffValue = 10000) => {
    return (value < cutoffValue) ? toTextWithDecimalsMinMax(value, decimals, decimals) : abbreviatedNumberText(value, 3, 4);
}

const standardNumberText = (value, maxDecimals = 1) => {
    return toTextWithDecimalsMax(value, maxDecimals);
}

const toTextWithDecimalsMax = (value, maxDecimals) => {
    return value.toLocaleString(undefined, { maximumFractionDigits: maxDecimals })
}

const toTextWithDecimalsMinMax = (value, minDecimals, maxDecimals) => {
    return value.toLocaleString(undefined, { minimumFractionDigits: minDecimals, maximumFractionDigits: maxDecimals })
}

const abbreviatedNumberText = (value, absoluteMaxFracDigits, tenBaseFracDigitsCutoff = 6) => {
    let tenBase = (value < 1) ? 0 : Math.floor(Math.log10(value));
    let dividerBase = tenBase < 3 ? 0 : tenBase - (tenBase % 3);
    let fracDigits = tenBase < tenBaseFracDigitsCutoff ? 0 : 3 - (tenBase % 3);
    fracDigits = Math.min(fracDigits, absoluteMaxFracDigits);

    return toTextWithDecimalsMinMax((Math.floor(value) / Math.pow(10, dividerBase)), fracDigits, fracDigits) + tenBaseToAbbreviation(tenBase);
}

const tenBaseToAbbreviation = (tenBase, cutoff = 4) => {
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