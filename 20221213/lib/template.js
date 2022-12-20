const fs = require("fs");
const path = require("path")

module.exports = (filename, obj={}, defaultDir='../views') => {
    console.log(obj)
    const target = path.join(__dirname, defaultDir, filename)
    let readline = fs.readFileSync(target,'utf8')
    //string.prototype.replaceAll(찾을단어, 바꿀단어)
    // let text = readline.replaceAll('{{name}}',obj.name)
    // text = text.replaceAll("{{title}}",obj.title)
    for(const key in obj) {
        //key :name , obj[key] : "name값"
        readline = readline.replaceAll(`{{${key}}}`, obj[key])
        // console.log(key,obj[key])
    }

    return readline
}