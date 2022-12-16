const fs = require("fs")
const path = require("path")

module.exports = (filename)=>{
    const fileroad = path.join(__dirname, "../views", filename)
    const readFile = fs.readFileSync(fileroad, "utf8")
    return readFile
}