const fs = require("fs")
const path = require("path")

// console.log(path)

module.exports = (filename)=>{
    const target = path.join(__dirname,"../views",filename)
    return fs.readFileSync(target, "utf8")
}