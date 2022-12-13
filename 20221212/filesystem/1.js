const fs = require("fs")
const path = require("path")

const filename = path.join(__dirname, "./src/index.html")
console.log(filename)
//비동기로 실행된다.
//인자값 1.파일경로 + 파일명 2.인코딩[옵션 넣어도 그만 안넣어도 그만] 3.콜백함수
fs.readFile(filename, "utf8" , (err, data)=>{
    if(err) console.log(err)
    console.log(data)
})

//동기로 처리 되는것
//둘 다 buffer 로 처리된다.
const data = fs.readFileSync(filename,"utf8")
console.log("sync : ", data)