// const reqeustMessage = `reply:ture
// content-type:string
// content-length:10

// Hello world!!!`


const createRequestMessage = (reply,type,body) =>{
    const length = Buffer.from(body).lonf
    return `replty:${reply}
    content-type:${type}
    content-lenghth${length}
    
    ${body}`
}

createRequestMessage(true, "string", "hello world")

const obj = {
    reply: true,
    "content-type": "string",
    body: "hello world"
}
// const arr = ["reply", "content-type", "body"]

// obj[arr[0]] // true
// obj[arr[1]] // string
// obj[arr[2]] // hello world!

const arr = Object.keys(obj).filter((value)=>{     //filter의 리턴은 무조건 true false
    return value !== "body" // return 오브젝트의 키값만 반환 // if 조건문과 비슷하다. body가 아니다 > true
})
arr.push("content-length")

// map은 요소를 바꾸는 것이기 때문에 return에 바꿀 요소 값을 써야한다. 
const arr2 = arr.map((value)=>{
    return `${value}:${obj[value]}`
})

let text = arr2.join("\r\n")

text += `\r\n` + obj.body

console.log(typeof text)

// let str = ""
// for(let i=0; i<arr.length; i++){
//     // console.log(arr1[i],obj[arr1[i]])
//     str += `${arr[i]}:${obj[arr[i]]}` //\r\n은 띄워쓰기 가능 
//     if(i !== arr.length-1) str += `\r\n` 
// }

// console.log(str)

// module.exports = (obj)=>{
//     obj[`content-length`] = Buffer.from(obj.body).length
    
//     const keys= Object.keys(obj)
//     const arr = keys.filter(v=>v !== "body")
//                     .map(v=> v+":"+obj[v])
//                     .join("\r\n")
//                     // console.log(arr)

//     const body = `

// ${obj.body}`
//     console.log(arr+body)
// }

// const obj = {
//     reply: true,
//     "content-type": "string",
//     body: "hello world"
// }

// createRequestMessage(obj)
