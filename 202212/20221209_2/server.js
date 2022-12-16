const express = require("express")
const path = require("path") // 경로를 만들어주기 위해서 쓴다.
const app = express()

console.log(path.join(__dirname, 'views','index.html'))

app.get("/", (req, res)=>{
    const body = path.join(__dirname, 'views','index.html') 
    console.log(body)
    res.sendFile(body)//res는 응답 객체 index.html에 있는 text를 준다는 것이 더 명확하다.
})

app.get("/list", (req, res)=>{
    const body = path.join(__dirname, 'views','list.html')
    console.log(body)
    res.sendFile(body)
})

app.get("/write", (req, res)=>{
    const body = path.join(__dirname, 'views','write.html')
    console.log(body)
    res.sendFile(body)
})

app.post("/write", (req, res)=>{
    const body = path.join(__dirname, 'views','index.html')
    console.log(body)
    res.sendFile(body)
})

app.listen(3000, ()=>{
    console.log(`server start`)
})