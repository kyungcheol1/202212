const fs = require("fs")
const path = require("path")
const DEFAULT_DIR = "../views"

module.exports = (filname) => {
    const target = path.join(__dirname,DEFAULT_DIR,filname)
    const read = fs.readFileSync(target, "utf8")
    return read
}