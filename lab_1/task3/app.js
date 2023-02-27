const myFunc = require("./data")

function appjs(value) {

    let mas = myFunc(value);
    let strs = []

    for (let i = 0; i < mas.length; i++) {
        mas[i].show();
        strs[i] = mas[i].show()
    }
    return strs
}

module.exports.appjs =appjs