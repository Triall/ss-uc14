export function formatDate(date, formatStyle, locale) {
    const options = {
        style1: { year: 'numeric', month: 'long', day: 'numeric' },
        style2: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
        style3: { weekday: 'short', year: '2-digit', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' },
        style4: { hour: '2-digit', minute: '2-digit', second: '2-digit' },
    };

    return new Intl.DateTimeFormat(locale, options[formatStyle]).format(new Date(date));
}


export function formatNumber(number, formatStyle, locale) {
    const options = {
        style1: { minimumFractionDigits: 0, maximumFractionDigits: 0 },
        style2: { minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: true },
        style3: { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true },
        style4: { notation: 'scientific' },
    };

    return new Intl.NumberFormat(locale, options[formatStyle]).format(number);
}


export function formatUnit(value, unitType, locale) {
    const converters = {
        inchesToCm: (val) => val * 2.54,
        poundsToKg: (val) => val * 0.453592,
        litersToOz: (val) => val * 33.814,
    };

    const formatters = {
        cm: (val) => `${val.toFixed(2)} cm`,
        kg: (val) => `${val.toFixed(2)} kg`,
        oz: (val) => `${val.toFixed(2)} oz`,
    };

    const unitConverters = {
        inches: { to: 'cm', converter: converters.inchesToCm },
        pounds: { to: 'kg', converter: converters.poundsToKg },
        liters: { to: 'oz', converter: converters.litersToOz },
    };

    const { to, converter } = unitConverters[unitType];
    const formattedValue = converter(value);

    return formatters[to](formattedValue);
}

export function formatCurrency(value, currency, locale) {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(value);
}
