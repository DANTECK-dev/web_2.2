let fs = require('fs')
function data() {
    return fs.readFileSync(`${__dirname}/data.txt`, "utf8")
}

module.exports.data = data