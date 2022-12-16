const message = {
    reply:true, 
    "content-type":"string", 
    body: "답장주세요"
}

//필요한거 content length
//string으로 변환해서 보내야 http도 알아쳐듣는다. join이용
//content-body = buffer로 변환 한 body 의 length
//body는 맨 마지막에 붙어야 함
//
message["content-body"] = Buffer.from(message.body).length
const keys = Object.keys(message)
const array = keys.filter((value)=>{
    return value !== "body"
})
const array2 = array.map((value)=>{
    return value + ":" +message[value]
})
const array3 = array2.join("\r\n")

const text = `${array3}\r\n${message.body}`
console.log(text)

const incodingmessage = (message) => {
    message["content-body"] = Buffer.from(message.body).length

    const keys = Object.keys(message)
    console.log(keys)
}
