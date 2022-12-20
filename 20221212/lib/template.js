const fs = require("fs")
const path = require("path")
const DEFAULT_DIR = "../views"

module.exports = (filename) => {
    const target = path.join(__dirname, DEFAULT_DIR, filename)
    const readline = fs.readFileSync(target, "utf8")
    return readline
}       

//filename 매개변수 안에 있는 파일을 가져와서 HTML을 return 함
//파일을 읽을 수 있는가 ? 