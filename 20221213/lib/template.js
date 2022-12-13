const fs = require("fs");
const path = require("path")

module.exports = (filename, obj={}, defaultDir='../views') => {
    const target = path.join(__dirname, defaultDir, filename)
    const readline = fs.readFileSync(target,'utf8')
    return readline
}