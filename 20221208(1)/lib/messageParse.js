// const message = `reply:true
// content-type:string
// content-length:15

// 답장주세요`

    
// console.log(headers)
// console.log(body)

// /* 
// 배열함수
// map 요소내용을 바꿀 때
// filter 요소내용을 제거할 때
// reduce 배열에서 다른 타입으로 변경할 때 [] {}*/



module.exports = (message)=>{
        
    const arr = message.split("\n").filter((v) => v !== "")
        
    const body = arr.pop()
    const headers = arr

        
    //인자값 2개 
    /* 1.callbacck 
        1. 이전요소
        2. 현재요소
        3. 인덱스
        4. 배열전체값
    2:{}*/
    const header = headers.reduce((acc, value, index)=>{
        //value : reply:true
        const [key, val] = value.split(":")
        acc[key] = val
        return acc
    }, {})

    return {
        header: header,
        body: body,
    }
}

//const [key, val] 선언부분에 배열을 쓰면 배열의 값을 뽑아오겠다는 의미다.
//key=arr[0]값을 뽑아오고 val=arr[1]번 값을 뽑아와서 사용한다.
