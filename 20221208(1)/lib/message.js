const incodeMessage = (obj)=>{
    obj[`content-length`] = Buffer.from(obj.body).length
    
    const keys= Object.keys(obj)
    const arr = keys
        .filter((v) => v !== "body")
        .map((v) => v + ":" + obj[v])
        .join("\r\n")

    const text = `${arr}\r\n${obj.body}`

    return text
}

const decidingMessage = (message)=>{
        
    const arr = message.split("\r\n").filter((v) => v !== "")
        
    const body = arr.pop()
    const headers = arr

    const header = headers.reduce((acc, value, index)=>{
        const [key, val] = value.split(":")
        acc[key] = val
        return acc
    }, {})

    return {
        header: header,
        body: body,
    }
}

module.exports = {
    incodeMessage,
    decidingMessage,
}

//객체명과 속성명이 같으면 함축 시킬 수 있다.