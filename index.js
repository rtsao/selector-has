function classRegex(className) {
    return new RegExp('\\.' + className + '($|[\\s\.\[,>+~#:])');
}

function selectorHas(selector, className) {
    return classRegex(className).test(selector);
}

module.exports = selectorHas;
