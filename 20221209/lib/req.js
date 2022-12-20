const msg = `GET /user?name=catcat&age=32 HTTP/1.1
Host: localhost:3000
Connection: keep-alive
Cache-Control: max-age=0
sec-ch-ua: "Not?A_Brand";v="8", "Chromium";v="108", "Microsoft Edge";v="108"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.42
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: ko,en;q=0.9,en-US;q=0.8

{
    name:"catcat",
    age:32
}`

const getQuery = (queryString) => {
    if(queryString === undefined) return null
    const query = queryString
        .split("&")
        .map((v)=> v.split("="))
        .reduce((acc,value)=>{
            const [key,val] = value
            acc[key] = val
            return acc
        },{})
    return query
}

const getheader = (arr)=>{
    return arr
        .map((v)=>v.split(":"))
        .reduce((acc,value)=>{
            let [key, val, port] = value
            if(port !== undefined) val += `:${port}`
            acc[key] = val
            return acc
        },{})
}

const getBody = (line) => {
    // for(let i=0; i<line.length; i++){
    //     if(line[i] === "") console.log(i)
    // }
    let flag = false
    let body = ""
    for (const key in line){
        if(flag) {
            body = line
                .splice(key)
                .map((v)=>v.trim())
                .join("")
        }
        if(line[key] === "") flag = true
    }
    line.pop()
    const headers = getheader(line)
    // console.log(headers)
    return [headers, body]
}

const parser = (message)=>{
    // console.log(message) //string -> array \n
    //startline
    //body
    //header 객체 만들기
    const header = message.split("\r\n")

    const [method, url, version] = header.shift().split(" ")
    const [path, queryString] = url.split("?")

    const query = getQuery(queryString)
    const [headers, body] = getBody(header)

    return {
        method,
        path,
        version,
        url:headers.Host + url,
        query,
        headers,
        body
    }
}

module.exports = parser