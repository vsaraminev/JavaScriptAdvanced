function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) {
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
}

function getDollarFormatter(currencyFormatter) {
    function formatter(value) {
        return currencyFormatter(",", "$", true, value);
    }

    return formatter;
}

const dollarFormatter = getDollarFormatter(currencyFormatter);
let result = dollarFormatter(22.322332);
console.log(result); 
