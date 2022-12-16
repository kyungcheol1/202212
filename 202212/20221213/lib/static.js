const fs = require("fs")
const path = require("path")

const root = 'public'
const rootDir = path.join(__dirname,"../",root)


let result = {}
const find = (currentPath) => {
    const dir = fs.readdirSync(currentPath)
    // dir.forEach((v)=>{console.log(v)})
    for (const index in dir) {
        const findPath = path.join(currentPath, dir[index])
        const isFile = fs.statSync(findPath).isFile() // file:true, diretory : false


        if (!isFile){  //디렉토리일경우
            find(findPath)
        } else { // 파일일 경우
            const key = currentPath === rootDir ? '/' : currentPath.replaceAll(rootDir,"")
            const httpPath = path.join(key, dir[index])
            result[httpPath] = dir[index]
        }
    }
    return result
}

// const test = find(rootDir)
// console.log(test)

module.exports = find(rootDir)
//함수를 실행시킨 결과물을 반환해줘야 return인 result가 반환된다.