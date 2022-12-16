// fs 시스템 public 안에서 나오는 파일들을 파악 할 수 있어야한다.
// fs.readdirSync === ls 같은 역할을 한다. return >> 배열
// fs는 웬만하면 path 와 짝꿍이다

const fs = require("fs")
const path = require("path")

//경로
const searchPath = path.join(__dirname, "public")
const dir = fs.readdirSync(searchPath)
console.log(dir)


//fs.stat(경로) 해당 경로에 있는 디렉토리 또는 파일의 정보를 나타내줍니다.
// 리턴이 객체다. method들이 많다. isFile()
// dir.forEach(v => console.log(v));
// for (const index in dir) {
//     console.log(dir[index])
// }

const find = path.join(searchPath,"test.js")
const isFile = fs.statSync(find).isFile() //객체
console.log(isFile) // boolean 타입으로 반환시켜줌

/*
    `/css/index.css':'index.css',
    `/css/header/index.css':"index.css"
    `/imgeas/1.jpg`:`1.jpg`,
    `/js/index.js`:`index.js`,
    `/1.js`:`.js`
*/

// 해당 내용이 디렉토리일경우.
// 해당 내용이 파일